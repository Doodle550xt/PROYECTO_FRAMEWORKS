import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { EntrenadoresComponent } from './pages/dashboard/entrenadores/listado/entrenadores.component';
import { EditarEntrenadoresComponent } from './pages/dashboard/entrenadores/editar/editar-entrenadores.component';
import { EliminarEntrenadoresComponent } from './pages/dashboard/entrenadores/eliminar/eliminar-entrenadores.component';
import { AgregarEntrenadoresComponent } from './pages/dashboard/entrenadores/agregar/agregar-entrenadores.component';
import { EquiposComponent } from './pages/dashboard/equipos/listado/equipos.component';
import { EditarEquiposComponent } from './pages/dashboard/equipos/editar/editar-equipos.component';
import { EliminarEquiposComponent } from './pages/dashboard/equipos/eliminar/eliminar-equipos.component';
import { AgregarEquiposComponent } from './pages/dashboard/equipos/agregar/agregar-equipos.component';
import { JugadoresComponent } from './pages/dashboard/jugadores/listado/jugadores.component';
import { AgregarJugadoresComponent } from './pages/dashboard/jugadores/agregar/agregar-jugadores.component';
import { EditarJugadoresComponent } from './pages/dashboard/jugadores/editar/editar-jugadores.component';
import { EliminarJugadoresComponent } from './pages/dashboard/jugadores/eliminar/eliminar-jugadores.component';
import { LigasComponent } from './pages/dashboard/ligas/listado/ligas.component';
import { AgregarLigasComponent } from './pages/dashboard/ligas/agregar/agregar-ligas.component';
import { EditarLigasComponent } from './pages/dashboard/ligas/editar/editar-ligas.component';
import { EliminarLigasComponent } from './pages/dashboard/ligas/eliminar/eliminar-ligas.component';
import { AgregarCompetenciaComponent } from './pages/dashboard/competencias/agregar/agregar-competencia.component';
import { CompetenciasComponent } from './pages/dashboard/competencias/listado/competencias.component';
import { EditarCompetenciaComponent } from './pages/dashboard/competencias/editar/editar-competencia.component';
import { EliminarCompetenciaComponent } from './pages/dashboard/competencias/eliminar/eliminar-competencia.component';
import { protectedRoutesGuard } from './shared/guards/protected-routes-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'entrenadores', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate:[protectedRoutesGuard],
    children: [
      {
        path: 'entrenadores',
        component: EntrenadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'entrenadores/editar/:id',
        component: EditarEntrenadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'entrenadores/eliminar/:id',
        component: EliminarEntrenadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'entrenadores/agregar',
        component: AgregarEntrenadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },


      {
        path: 'equipos',
        component: EquiposComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'equipos/editar/:id',
        component: EditarEquiposComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'equipos/eliminar/:id',
        component: EliminarEquiposComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'equipos/agregar',
        component: AgregarEquiposComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },

      {
        path: 'jugadores',
        component: JugadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'jugadores/editar/:id',
        component: EditarJugadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'jugadores/eliminar/:id',
        component: EliminarJugadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'jugadores/agregar',
        component: AgregarJugadoresComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },

      {
        path: 'ligas',
        component: LigasComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'ligas/editar/:id',
        component: EditarLigasComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'ligas/eliminar/:id',
        component: EliminarLigasComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'ligas/agregar',
        component: AgregarLigasComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },


      {
        path: 'competencias',
        component: CompetenciasComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'competencias/editar/:id',
        component: EditarCompetenciaComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'competencias/eliminar/:id',
        component: EliminarCompetenciaComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'competencias/agregar',
        component: AgregarCompetenciaComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template',
      },
    ]
  },
  // auth pages
  {
    path: 'signin',
    component: SignInComponent,
    title: 'Angular Sign In Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Angular Sign Up Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
  // error pages
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Angular NotFound Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
];
