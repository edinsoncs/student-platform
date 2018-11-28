import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


//Import components
import { HomeComponent } from './pages/home/home.component';
//Import components
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursComponent } from './pages/cours/cours.component';
import { CoursViewComponent } from './pages/coursview/coursview.component';



const appRouters: Routes = [
	
	{ path: '', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'dashboard/cours', component: CoursComponent },
	{ path: 'dashboard/cours/:id', component: CoursViewComponent },
	{ path: '**', component: HomeComponent }
	
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);