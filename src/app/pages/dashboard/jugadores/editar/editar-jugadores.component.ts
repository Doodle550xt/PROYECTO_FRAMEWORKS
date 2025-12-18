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
import { Entrenador, EntrenadorPayload } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "../../../../shared/components/form/select/select.component";
import { Equipo, EquipoPayload } from '../../../../shared/models/equipos';
import { EquiposService } from '../../../../shared/services/equiposService';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { Jugador, JugadorPayload } from '../../../../shared/models/jugadores';
import { JugadoresService } from '../../../../shared/services/jugadoresService';

@Component({
  selector: 'app-ecommerce',
  imports: [
    ComponentCardComponent,
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    FormsModule,
    RouterLink,
    SelectComponent
  ],
  templateUrl: './editar-jugadores.component.html',
})
export class EditarJugadoresComponent {

  ////

  juagdor: Jugador = {
    id: 0,
    nombre: "",
    posicion: "",
    numero: 0,
    equipo: {
      id: 0,
      nombre: "",
      ciudad: "",
      entrenador: {
        id: 0,
        nombre: "",
        nacionalidad: "",
        experiencia: 0
      }
    }
  }

  options = [
    { value: "", label: "" },
  ];

  constructor(private serviceJugador: JugadoresService, private servicioEquipos: EquiposService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {

    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.serviceJugador.obtenerJugadorPorId(id).subscribe({
      next: (data: Jugador) => {
        this.juagdor = data;
        console.log(data)
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });


    this.servicioEquipos.obtenerEquipos().subscribe({
      next: (data: Equipo[]) => {
        this.options = data.map((item) => {
          return {
            value: item.id.toString(),
            label: item.nombre
          }
        })
        this.juagdor.equipo.id = data[0].id
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

  actualizarJugador(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.serviceJugador.actualizarJugador(id, this.juagdor).subscribe({
      next: (data: any) => {
        this.router.navigate(["/jugadores"])
      },
      error: (error: any) => {
        console.log("[-] Ocurrió un error")
        console.log(error);
        alert(error);
      }
    });
  }
  handleSelectChange(value: string) {
    this.juagdor.equipo.id = +value;
    console.log('Selected value:', value);
  }
}
