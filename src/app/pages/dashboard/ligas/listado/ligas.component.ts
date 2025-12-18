import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { Entrenador } from '../../../../shared/models/entrenador';
import { ComponentCardComponent } from "../../../../shared/components/common/component-card/component-card.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
import { EquiposService } from '../../../../shared/services/equiposService';
import { Equipo } from '../../../../shared/models/equipos';
import { JugadoresService } from '../../../../shared/services/jugadoresService';
import { Jugador } from '../../../../shared/models/jugadores';
import { LigasService } from '../../../../shared/services/ligasService';
import { Liga } from '../../../../shared/models/ligas';

@Component({
  selector: 'app-ecommerce',
  imports: [
    RouterLink,
    ComponentCardComponent,
    ButtonComponent
  ],
  templateUrl: './ligas.component.html',
})
export class LigasComponent {
  tableData: Liga[] = []
  constructor(private servicioLigas: LigasService, private authServices: AuthService, private cdr: ChangeDetectorRef, private routes: Router) {

  }
  ngOnInit(): void {
    this.servicioLigas.obtenerLigas().subscribe({
      next: (data: Liga[]) => {
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
