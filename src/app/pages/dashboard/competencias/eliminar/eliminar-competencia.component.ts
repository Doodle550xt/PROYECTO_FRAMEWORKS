import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ComponentCardComponent } from '../../../../shared/components/common/component-card/component-card.component';
import { LabelComponent } from '../../../../shared/components/form/label/label.component';
import { InputFieldComponent } from '../../../../shared/components/form/input/input-field.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { SelectComponent } from '../../../../shared/components/form/select/select.component';

import { CompetenciasService } from '../../../../shared/services/competenciasService';
import { EquiposService } from '../../../../shared/services/equiposService';
import { Competencia } from '../../../../shared/models/competencia';
import { Equipo } from '../../../../shared/models/equipos';

@Component({
  selector: 'app-eliminar-competencia',
  standalone: true,
  imports: [
    ComponentCardComponent,
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './eliminar-competencia.component.html',
})
export class EliminarCompetenciaComponent {

  competencia: Competencia | null = null;
  opcionesEquipos: { value: string; label: string }[] = [];

  constructor(
    private servicioCompetencias: CompetenciasService,
    private servicioEquipos: EquiposService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Cargar equipos para mostrar nombres
    this.servicioEquipos.obtenerEquipos().subscribe({
      next: (equipos: Equipo[]) => {
        this.opcionesEquipos = equipos.map(e => ({ value: e.id.toString(), label: e.nombre }));
      },
      error: err => {
        console.error(err);
        alert('Error al cargar equipos');
      }
    });

    // Cargar competencia por ID
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicioCompetencias.obtenerCompetenciaPorId(id).subscribe({
      next: (c: Competencia) => {
        this.competencia = c;
      },
      error: err => {
        console.error(err);
        alert('Error al cargar la competencia');
      }
    });
  }

  eliminar(): void {
    if (!this.competencia) return;

    if (!confirm('¿Estás seguro de eliminar esta competencia?')) return;

    this.servicioCompetencias.eliminarCompetencia(this.competencia.id).subscribe({
      next: () => {
        alert('Competencia eliminada correctamente');
        this.router.navigate(['/competencias']);
      },
      error: err => {
        console.error(err);
        alert('Error al eliminar la competencia');
      }
    });
  }
}
