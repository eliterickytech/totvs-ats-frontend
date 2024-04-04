import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../shared/services/login.service';
import { LoginModel } from '../model/login.model';
import { LoginResultModel } from '../model/result/loginResult.model';
import { PoNotificationModule } from '@po-ui/ng-components';
import { PoLinkModule } from '@po-ui/ng-components';
import { PoLoadingModule } from '@po-ui/ng-components';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  styles: [
    `
      .sample-container {
        position: relative;
        height: 300px;
      }
    `
  ]
})
export class LoginComponent {
  formLogin : LoginModel = new LoginModel();
  loginResult: LoginResultModel = new LoginResultModel()
  
  constructor(
    private loginServices: LoginServices ,
    private router: Router
  ){
    
  }

  login(){
    this.loginServices.post(this.formLogin).subscribe(
      resp =>{
        if (resp.statusCode == 201)
        {
          this.loginResult = {
            Id: resp.data.id,
            Token: resp.data.token
          };
          localStorage.setItem("token", resp.data.token)
          localStorage.setItem("id", resp.data.id)
          this.router.navigate(['/home']);  
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }   
}
