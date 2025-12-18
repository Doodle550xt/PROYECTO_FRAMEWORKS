import { ChangeDetectorRef, Component } from '@angular/core';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrenador, EntrenadorPayload } from '../../../../shared/models/entrenador';
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
  templateUrl: './agregar-entrenadores.component.html',
})
export class AgregarEntrenadoresComponent {
  entrenador: EntrenadorPayload = {
    nombre: "",
    nacionalidad: "",
    experiencia: 0
  }
  constructor(private servicioEntrenador: EntrenadorService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {

  }



  crearEntrenador(): void {
    this.servicioEntrenador.crearEntrenador(this.entrenador).subscribe({
      next: (data: EntrenadorPayload) => {
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
