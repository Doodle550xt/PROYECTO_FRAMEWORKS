import { ChangeDetectorRef, Component } from '@angular/core';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrenador, EntrenadorPayload } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';
import { EquipoPayload } from '../../../../shared/models/equipos';
import { SelectComponent } from "../../../../shared/components/form/select/select.component";
import { EquiposService } from '../../../../shared/services/equiposService';
import { LigasService } from '../../../../shared/services/ligasService';
import { Liga } from '../../../../shared/models/ligas';

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
  templateUrl: './agregar-equipos.component.html',
})
export class AgregarEquiposComponent {
  entrenador: EntrenadorPayload = {
    nombre: "",
    nacionalidad: "",
    experiencia: 0
  }
  equipo: EquipoPayload = {
    nombre: "",
    ciudad: "",
    entrenador: {
      id: 0
    }
  }

  options = [
    { value: "", label: '' },
  ];
  optionsLigas = [
    { value: "", label: '' },
  ];
  constructor(private servicioEntrenador: EntrenadorService, private servicioLigas: LigasService, private servicioEquipos: EquiposService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {
    this.servicioEntrenador.obtenerEntrenadores().subscribe({
      next: (data: Entrenador[]) => {
        this.options = data.map((item) => {
          return {
            value: item.id.toString(),
            label: item.nombre
          }
        })
        this.equipo.entrenador.id = data[0].id
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
    this.servicioLigas.obtenerLigas().subscribe({
      next: (data: Liga[]) => {
        this.optionsLigas = data.map((item) => {
          return {
            value: item.id.toString(),
            label: item.nombre
          }
        })
        this.equipo.liga = data[0]
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

  crearEntrenador(): void {
    this.servicioEquipos.crearEquipo(this.equipo).subscribe({
      next: (data: any) => {
        this.router.navigate(["/equipos"])
      },
      error: (error: any) => {
        console.log("[-] Ocurrió un error")
        console.log(error);
        alert(error);
      }
    });
  }
  handleSelectChange(value: string) {
    this.equipo.entrenador.id = +value;
    console.log('Selected value:', value);
  }
  handleSelectChangeLigas(value: string) {
    this.equipo.liga!.id = +value
    console.log('Selected value:', value);
  }
}
