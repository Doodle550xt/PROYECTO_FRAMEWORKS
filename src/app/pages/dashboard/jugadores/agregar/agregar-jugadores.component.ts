import { ChangeDetectorRef, Component } from '@angular/core';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrenador, EntrenadorPayload } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';
import { Equipo, EquipoPayload } from '../../../../shared/models/equipos';
import { SelectComponent } from "../../../../shared/components/form/select/select.component";
import { EquiposService } from '../../../../shared/services/equiposService';
import { JugadorPayload } from '../../../../shared/models/jugadores';
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
  templateUrl: './agregar-jugadores.component.html',
})
export class AgregarJugadoresComponent {

  juagdor: JugadorPayload = {
    nombre: "",
    posicion: "",
    numero: 0,
    equipo: {
      id: 0
    }
  }

  options = [
    { value: "", label: "" },
  ];

  constructor(private serviceJugador: JugadoresService, private servicioEquipos: EquiposService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {
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

  crearJugador(): void {
    this.serviceJugador.crearJugador(this.juagdor).subscribe({
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
