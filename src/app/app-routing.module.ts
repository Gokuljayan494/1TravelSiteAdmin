import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

// const routes: Routes = [
//   {
//     path: '',                       // {1}
//     component: HomeLayoutComponent,
//     canActivate: [AuthGuard],       // {2}
//     children: [
//       {
//         path: '',
//         component: HomeComponent   // {3}
//       }
//     ]
//   },
//   {
//     path: '',
//     component: LoginLayoutComponent, // {4}
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent   // {5}
//       }
//     ]
//   }
// ];
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: DashboardComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'bookings', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
