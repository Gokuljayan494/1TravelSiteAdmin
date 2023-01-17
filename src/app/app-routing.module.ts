import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { AuthGuard } from './auth-guard.guard';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FlightBookingsDetailPageComponent } from './flight-bookings-detail-page/flight-bookings-detail-page.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'agents', component: AgentsComponent },
      { path: 'detailPage/:id', component: DetailPageComponent },
      {
        path: 'flightBookingsDetailPage/:id',
        component: FlightBookingsDetailPageComponent,
      },

      // other protected routes
    ],
  },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
