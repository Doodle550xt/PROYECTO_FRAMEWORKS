import { ChangeDetectorRef, Component } from '@angular/core';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrenador } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "../../../../shared/components/form/select/select.component";
import { Equipo } from '../../../../shared/models/equipos';
import { EquiposService } from '../../../../shared/services/equiposService';

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
  templateUrl: './eliminar-equipos.component.html',
})
export class EliminarEquiposComponent {
  equipo: Equipo = {
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

  options = [
    { value: "", label: '' },
  ];
  constructor(private servicioEntrenador: EntrenadorService, private servicioEquipos: EquiposService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }


  ngOnInit(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.servicioEquipos.obtenerEquipoPorId(id).subscribe({
      next: (data: Equipo) => {
        this.equipo = data;
        console.log(data)
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }

  crearEntrenador(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.servicioEquipos.eliminarEquipo(id).subscribe({
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
  
}
