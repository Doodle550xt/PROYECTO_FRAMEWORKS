import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { CompetenciasService } from '../../../../shared/services/competenciasService';
import { Competencia } from '../../../../shared/models/competencia';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  imports: [
    RouterLink,
    ComponentCardComponent,
    ButtonComponent
  ],
})
export class CompetenciasComponent {
  tableData: Competencia[] = [];

  constructor(
    private servicioCompetencias: CompetenciasService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioCompetencias.obtenerCompetencias().subscribe({
      next: (data: Competencia[]) => {
        this.tableData = data;
        this.cdr.markForCheck();
      },
      error: (error: any) => {
        console.error('Error al cargar competencias:', error);
        alert('Ocurrió un error al obtener las competencias.');
      }
    });
  }

  eliminarCompetencia(id: number): void {
    if (!confirm('¿Estás seguro de eliminar esta competencia?')) return;

    this.servicioCompetencias.eliminarCompetencia(id).subscribe({
      next: () => {
        this.tableData = this.tableData.filter(c => c.id !== id);
        alert('Competencia eliminada correctamente.');
      },
      error: (error: any) => {
        console.error('Error al eliminar competencia:', error);
        alert('Ocurrió un error al eliminar la competencia.');
      }
    });
  }
}
