import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './pages/static/header/header.component';
import { HeaderdComponent } from './pages/static/header-dashboard/headerd.component';
import { FooterComponent } from './pages/static/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursComponent } from './pages/cours/cours.component';
import { CoursViewComponent } from './pages/coursview/coursview.component';

import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderdComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    CoursComponent,
    CoursViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
