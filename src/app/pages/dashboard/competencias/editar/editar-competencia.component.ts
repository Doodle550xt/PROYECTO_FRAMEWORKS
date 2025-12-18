import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentCardComponent } from '../../../../shared/components/common/component-card/component-card.component';
import { LabelComponent } from '../../../../shared/components/form/label/label.component';
import { InputFieldComponent } from '../../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { SelectComponent } from '../../../../shared/components/form/select/select.component';

import { EquiposService } from '../../../../shared/services/equiposService';
import { CompetenciasService } from '../../../../shared/services/competenciasService';

import { Equipo } from '../../../../shared/models/equipos';
import { Competencia, CompetenciaPayload } from '../../../../shared/models/competencia';

@Component({
  selector: 'app-editar-competencia',
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
  templateUrl: './editar-competencia.component.html',
})
export class EditarCompetenciaComponent {

  competencia: CompetenciaPayload = {
    equipoLocal: { id: 0 },
    equipoVisitante: { id: 0 },
    fecha: '',
    golesLocal: 0,
    golesVisitante: 0
  };

  opcionesEquipos: { value: string, label: string }[] = [];

  constructor(
    private servicioEquipos: EquiposService,
    private servicioCompetencias: CompetenciasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener lista de equipos
    this.servicioEquipos.obtenerEquipos().subscribe({
      next: (data: Equipo[]) => {
        this.opcionesEquipos = data.map(e => ({
          value: e.id.toString(),
          label: e.nombre
        }));
      },
      error: err => {
        console.error(err);
        alert('Error al cargar equipos');
      }
    });

    // Obtener competencia por id desde ruta
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicioCompetencias.obtenerCompetenciaPorId(id).subscribe({
      next: (c: Competencia) => {
        this.competencia = {
          equipoLocal: { id: c.equipoLocal.id },
          equipoVisitante: { id: c.equipoVisitante.id },
          fecha: c.fecha,
          golesLocal: c.golesLocal,
          golesVisitante: c.golesVisitante
        };
      },
      error: err => {
        console.error(err);
        alert('Error al cargar la competencia');
      }
    });
  }

  actualizarCompetencia(): void {
    if (this.competencia.equipoLocal.id === this.competencia.equipoVisitante.id) {
      alert('El equipo local y visitante no pueden ser el mismo');
      return;
    }

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicioCompetencias.actualizarCompetencia(id, this.competencia).subscribe({
      next: () => {
        alert('Competencia actualizada correctamente');
        this.router.navigate(['/competencias']);
      },
      error: err => {
        console.error(err);
        alert('Error al actualizar la competencia');
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
