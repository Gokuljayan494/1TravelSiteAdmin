// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { UsersComponent } from './users/users.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { UsersService } from './users.service';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FlightBookingsDetailPageComponent } from './flight-bookings-detail-page/flight-bookings-detail-page.component';
import { VideosComponent } from './videos/videos.component';
import { NewVideoComponent } from './new-video/new-video.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AgentsComponent,
    UsersComponent,
    BookingsComponent,
    NavBarComponent,
    LoginComponent,
    DetailPageComponent,
    FlightBookingsDetailPageComponent,
    VideosComponent,
    NewVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsersService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
