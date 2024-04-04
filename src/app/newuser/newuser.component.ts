import { Component } from '@angular/core';
import { PoFieldModule, PoMultiselectOption } from '@po-ui/ng-components';
import {  UserModel } from '../model/user.model';
import { UserServices } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { LoginServices } from '../shared/services/login.service';
import { LoginModel } from '../model/login.model';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  constructor(
    private userService: UserServices,
    private loginService: LoginServices,
    private router: Router
  ){}

  formUser: UserModel = new UserModel();
  formLogin : LoginModel = new LoginModel();
  
  habilities: Array<PoMultiselectOption> = [
    { value: 'C#', label: 'C#' },
    { value: 'Python', label: 'Python' },
    { value: 'DotNet', label: 'DotNet' },
    { value: 'Visual Studio', label: 'Visual Studio' },
    { value: 'Mensageria', label: 'Mensageria' },
    { value: 'Angular', label: 'Angular' },
  ];


  SaveNewUser(){
    this.userService.post(this.formUser).subscribe(
      resp => {
        if (resp.statusCode == 201){
          this.formLogin.Email = this.formUser.email;
          this.formLogin.Password = this.formUser.password;
          this.router.navigate(['/login']);  
        }
      }
    )
  }
}
