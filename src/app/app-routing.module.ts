import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importe o HomeComponent
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { VacancyComponent } from './vacancy/vacancy.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Login'} },
  { path: 'login', component: LoginComponent, data: { title: 'Login'} },
  { path: 'home', component: HomeComponent, data: { title: 'Home'} },
  { path: 'newuser', component: NewuserComponent, data: { title: 'Novo Usuário'} },
  { path: 'vacancy', component: VacancyComponent, data: { title: 'Vagas'} },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []  
})
export class AppRoutingModule { }
