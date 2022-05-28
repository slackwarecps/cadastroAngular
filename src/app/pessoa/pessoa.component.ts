import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent implements OnInit {
  public pessoas: Pessoa[] = [
    { id: 1, nome: 'Fabio Alvaro Pereira', idade: 43 },
    { id: 2, nome: 'Tatiana Vercelino Favoretti', idade: 43 },
    { id: 3, nome: 'Isabela Pereira', idade: 17 },
  ];
  displayedColumns = ['nome', 'idade'];

  constructor() {
    //this.pessoas = [];
  }

  ngOnInit(): void {}
}
