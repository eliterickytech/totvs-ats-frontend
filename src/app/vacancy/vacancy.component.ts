import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { PoListViewModule } from '@po-ui/ng-components';
import { VacancyServices } from '../shared/services/vacancy.service';
import { vacancyResult } from '../model/result/vacancyResult.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{
  constructor(
    private vacancyService: VacancyServices
  ){ }

  ngOnInit(): void {
    this.getVacancies();
  }

  vacancies!: vacancyResult[];

  items!: Array<any>

  readonly menus: Array<PoMenuItem> = [
    { label: 'Vagas', link: "/vacancy"  },
    { label: 'Meu Perfil', link: "/useredit"  },
    { label: 'Minhas Vagas', link: "/myvacancy" },
  ];


  
  getVacancies()  {
    this.vacancyService.getAll().subscribe(
        (data: any) => {
            this.items  = data.data.map((x: { title: any; description: any; requirement: any; }) => {
                return {
                  Name: x.title,
                  Descricao: x.description,
                  Requerimento: x.requirement 
                }
            });         
        })
    }
}

