import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { delay, first, tap } from 'rxjs/operators';

const API = 'api/courses';
const API2 = '/assets/pessoas.json';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  constructor(private httpClient: HttpClient) {}

  public listTeste(): Pessoa[] {
    return [{ id: 1, nome: 'Fabio Alvaro Pereira', idade: 43 }];
  }

  list() {
    return this.httpClient.get<Pessoa[]>(`${API}`).pipe(
      first(),
      //delay(5000),
      tap((listaDePessoas) => console.log(listaDePessoas))
    );
  }
}
