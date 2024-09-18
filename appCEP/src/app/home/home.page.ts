import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  CEP: any;
  cep: string;

  constructor(private http: HttpClient) { }

  consultarCep(){
  this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(res => {this.CEP = res});
  }
}
