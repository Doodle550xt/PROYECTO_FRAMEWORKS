import { ChangeDetectorRef, Component } from '@angular/core';
import { EntrenadorService } from '../../../../shared/services/entrenadorService';
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
  templateUrl: './eliminar-entrenadores.component.html',
})
export class EliminarEntrenadoresComponent {
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

  eliminar(): void {
    this.servicioEntrenador.eliminarEntrenador(this.entrenador.id).subscribe({
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
