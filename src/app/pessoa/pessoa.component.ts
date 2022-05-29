import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from './../model/pessoa';
import { PessoasService } from './services/pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent implements OnInit {
  public pessoas: Observable<Pessoa[]>;

  public pessoas3: Pessoa[] = [];

  public pessoas2: Pessoa[] = [
    { id: 1, nome: 'Fabio Alvaro Pereira', idade: 43 },
    { id: 2, nome: 'Tatiana Vercelino Favoretti', idade: 43 },
    { id: 3, nome: 'Isabela Pereira', idade: 17 },
  ];
  displayedColumns = ['nome', 'idade'];

  constructor(private pessoasService: PessoasService) {
    this.pessoas = this.pessoasService.list();
  }

  ngOnInit(): void {}
}
