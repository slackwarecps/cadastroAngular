import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pessoa } from './../model/pessoa';
import { ErrorDialogComponent } from './../shared/components/error-dialog/error-dialog.component';
import { PessoasService } from './services/pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent implements OnInit {
  public pessoas$: Observable<Pessoa[]>;

  public pessoas3: Pessoa[] = [];

  public pessoas2: Pessoa[] = [
    { id: 1, nome: 'Fabio Alvaro Pereira', idade: 43 },
    { id: 2, nome: 'Tatiana Vercelino Favoretti', idade: 43 },
    { id: 3, nome: 'Isabela Pereira', idade: 17 },
  ];
  displayedColumns = ['nome', 'idade'];

  constructor(
    private pessoasService: PessoasService,
    public dialog: MatDialog
  ) {
    this.pessoas$ = this.pessoasService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar pessoas');
        console.log('deu erro nao achou a pessoa lista');
        console.log(error);
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, { data: errorMsg });
  }

  ngOnInit(): void {}
}
