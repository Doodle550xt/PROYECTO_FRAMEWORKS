import { ChangeDetectorRef, Component } from '@angular/core';
import { EcommerceMetricsComponent } from '../../../../shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component';
import { MonthlySalesChartComponent } from '../../../../shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../../../shared/components/ecommerce/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../../../shared/components/ecommerce/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../../shared/components/ecommerce/recent-orders/recent-orders.component';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { AuthService } from '../../../../shared/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { Entrenador } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: 'app-ecommerce',
  imports: [
    RouterLink,
    ComponentCardComponent,
    ButtonComponent
],
  templateUrl: './entrenadores.component.html',
})
export class EntrenadoresComponent {
  tableData: Entrenador[] = []
  constructor(private servicioEntrenador: EntrenadorService, private authServices: AuthService, private cdr: ChangeDetectorRef, private routes: Router) {

  }
  ngOnInit(): void {

    this.servicioEntrenador.obtenerEntrenadores().subscribe({
      next: (data: Entrenador[]) => {
        this.tableData = data;
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }
  logout(): void {
    this.authServices.logout()
    this.routes.navigate(["/login"])
  }

}
