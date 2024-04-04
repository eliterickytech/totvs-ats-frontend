import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router
  ){}
  readonly menus: Array<PoMenuItem> = [
    { label: 'Vagas', link: "/vacancy"  },
    { label: 'Meu Perfil', link: "/useredit"  },
    { label: 'Minhas Vagas', link: "/myvacancy" },
  ];
}
