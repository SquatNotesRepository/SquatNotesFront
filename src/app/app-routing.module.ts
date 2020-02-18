import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TrainingListComponent} from './training-list/training-list.component';
import {SupportComponent} from './support/support.component';
import {TrainingDetailComponent} from './training-detail/training-detail.component';
import {HttpTesterComponent} from './http-tester/http-tester.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guard/Auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'training-list', component: TrainingListComponent},
  {path: 'support', component: SupportComponent},
  {path: 'training-detail', component: TrainingDetailComponent},
  {path: 'http-tester', component: HttpTesterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
