import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentCardComponent } from '../../../../shared/components/common/component-card/component-card.component';
import { LabelComponent } from '../../../../shared/components/form/label/label.component';
import { InputFieldComponent } from '../../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { SelectComponent } from '../../../../shared/components/form/select/select.component';

import { EquiposService } from '../../../../shared/services/equiposService';

import { Equipo } from '../../../../shared/models/equipos';
import { CompetenciaPayload } from '../../../../shared/models/competencia';
import { CompetenciasService } from '../../../../shared/services/competenciasService';

@Component({
  selector: 'app-agregar-competencia',
  standalone: true,
  imports: [
    ComponentCardComponent,
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    FormsModule,
    RouterLink,
    SelectComponent
  ],
  templateUrl: './agregar-competencia.component.html',
})
export class AgregarCompetenciaComponent {

  competencia: CompetenciaPayload = {
    equipoLocal: { id: 0 },
    equipoVisitante: { id: 0 },
    fecha: ''
  };

  opcionesEquipos = [
    { value: '', label: '' }
  ];

  constructor(
    private servicioEquipos: EquiposService,
    private servicioCompetencias: CompetenciasService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.servicioEquipos.obtenerEquipos().subscribe({
      next: (data: Equipo[]) => {
        this.opcionesEquipos = data.map(e => ({
          value: e.id.toString(),
          label: e.nombre
        }));

        // Valores por defecto
        if (data.length >= 2) {
          this.competencia.equipoLocal.id = data[0].id;
          this.competencia.equipoVisitante.id = data[1].id;
        }
      },
      error: err => {
        console.error(err);
        alert('Error al cargar equipos');
      }
    });
  }

  crearCompetencia(): void {

    if (this.competencia.equipoLocal.id === this.competencia.equipoVisitante.id) {
      alert('El equipo local y visitante no pueden ser el mismo');
      return;
    }

    this.servicioCompetencias.crearCompetencia(this.competencia).subscribe({
      next: () => {
        this.router.navigate(['/competencias']);
      },
      error: err => {
        console.error(err);
        alert('Error al crear la competencia');
      }
    });
  }

  handleEquipoLocalChange(value: string) {
    this.competencia.equipoLocal.id = +value;
  }

  handleEquipoVisitanteChange(value: string) {
    this.competencia.equipoVisitante.id = +value;
  }
}
