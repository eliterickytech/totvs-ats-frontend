import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginServices } from './shared/services/login.service';
import { PoPageLoginAuthenticationType } from '@po-ui/ng-templates';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { UserServices } from './shared/services/user.service';
import { NewuserComponent } from './newuser/newuser.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { VacancyServices } from './shared/services/vacancy.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewuserComponent,
    VacancyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    PoTemplatesModule
    
  ],
  exports: [RouterModule],
  providers: [LoginServices, UserServices, VacancyServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
