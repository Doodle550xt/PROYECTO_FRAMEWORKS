import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { LabelComponent } from "../../../../shared/components/form/label/label.component";
import { InputFieldComponent } from "../../../../shared/components/form/input/input-field.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "../../../../shared/components/form/select/select.component";
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
  templateUrl: './editar-ligas.component.html',
})
export class EditarLigasComponent {

  liga: Liga = {
    id: 0,
    nombre: "",
    pais: "",
    temporadaActual: "",
    equipos: []
  }
  constructor(private servicioLigas: LigasService, private rutaActiva: ActivatedRoute, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {

    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.servicioLigas.obtenerLigaPorId(id).subscribe({
      next: (data: Liga) => {
        this.liga = data;
        console.log(data)
      },
      error: (error: any) => {
        console.log(error);
        alert(error);
      }
    });
  }
  actualizarLiga(): void {
    const id = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.servicioLigas.actualizarLiga(id, this.liga).subscribe({
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
