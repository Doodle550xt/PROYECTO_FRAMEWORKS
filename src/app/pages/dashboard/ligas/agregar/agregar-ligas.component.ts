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
import { Liga, LigaPayload } from '../../../../shared/models/ligas';
import { LigasService } from '../../../../shared/services/ligasService';

@Component({
  selector: 'app-ecommerce',
  imports: [
    ComponentCardComponent,
    LabelComponent,
    InputFieldComponent,
    ButtonComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './agregar-ligas.component.html',
})
export class AgregarLigasComponent {
  liga: LigaPayload = {
    nombre:"",
    pais:"",
    temporadaActual:""
  }
  constructor(private servicioLigas: LigasService,  private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {
  }

  crearLiga(): void {
    this.servicioLigas.crearLiga(this.liga).subscribe({
      next: (data: any) => {
        this.router.navigate(["/ligas"])
      },
      error: (error: any) => {
        console.log("[-] Ocurrió un error")
        console.log(error);
        alert(error);
      }
    });
  }
}
