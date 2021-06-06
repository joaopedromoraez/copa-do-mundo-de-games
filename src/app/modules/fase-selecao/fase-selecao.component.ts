import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from '@shared/models/game';
import { Lambda3Service } from './services/lambda3.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-fase-selecao',
  templateUrl: './fase-selecao.component.html',
  styleUrls: ['./fase-selecao.component.scss']
})
export class FaseSelecaoComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'titulo', 'nota', 'ano'];

  games = new MatTableDataSource<Game>();

  selection = new SelectionModel<Game>(true, []);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    readonly service: Lambda3Service,
  ) { }

  ngOnInit(): void {
    this.games.sort = this.sort;
    this.service.getGames().subscribe(res=>this.games.data = res);
  }

  consoleName(id: string) {
    return id.split('/')[1]
            .split('-')
            .map(name=>`${name[0].toUpperCase()}${name.substring(1)}`)
            .join(' ')
  }

}
