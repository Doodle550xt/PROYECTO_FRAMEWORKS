import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { Entrenador } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { EquiposService } from '../../../../shared/services/equiposService';
import { Equipo } from '../../../../shared/models/equipos';

@Component({
  selector: 'app-ecommerce',
  imports: [
    RouterLink,
    ComponentCardComponent,
    ButtonComponent
  ],
  templateUrl: './equipos.component.html',
})
export class EquiposComponent {
  tableData: Equipo[] = []
  constructor(private servicioEquipos: EquiposService, private authServices: AuthService, private cdr: ChangeDetectorRef, private routes: Router) {

  }
  ngOnInit(): void {
    this.servicioEquipos.obtenerEquipos().subscribe({
      next: (data: Equipo[]) => {
        this.tableData = data;
        console.log(data)
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
