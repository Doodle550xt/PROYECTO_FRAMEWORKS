import { ChangeDetectorRef, Component } from '@angular/core';
import { EcommerceMetricsComponent } from '../../../../shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component';
import { MonthlySalesChartComponent } from '../../../../shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../../../shared/components/ecommerce/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../../../shared/components/ecommerce/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../../shared/components/ecommerce/recent-orders/recent-orders.component';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { AuthService } from '../../../../shared/services/auth-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrenador } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecommerce',
  imports: [
    ComponentCardComponent,
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    FormsModule,
    RouterLink
],
  templateUrl: './editar-entrenadores.component.html',
})
export class EditarEntrenadoresComponent {
  entrenador: Entrenador = {
    id: 0,
    nombre: "",
    nacionalidad: "",
    experiencia: 0
  }
  constructor(private servicioEntrenador: EntrenadorService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.servicioEntrenador.obtenerEntrenadoresPorId(id).subscribe({
      next: (data: Entrenador) => {
        console.log("[+]")
        this.entrenador = data;
        this.cdr.detectChanges()
        console.log(data)
      },
      error: (error: any) => {
        console.log("[+]")
        console.log(error);
        alert(error);
      }
    });
  }

  updateEntrenador(): void {
    this.servicioEntrenador.actualizarEntrenadores(this.entrenador.id, this.entrenador).subscribe({
      next: (data: Entrenador) => {
        this.router.navigate(["/entrenadores"])
      },
      error: (error: any) => {
        console.log("[-] Ocurrió un error")
        console.log(error);
        alert(error);
      }
    });
  }
}
