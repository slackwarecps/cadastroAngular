import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  
  constructor(private httpClient: HttpClient) {}

  public list(): Pessoa[] {
    return [{ id: 1, nome: 'Fabio Alvaro Pereira', idade: 43 }];
  }
}
