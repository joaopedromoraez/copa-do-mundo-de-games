import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '@shared/models/game';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.scss']
})
export class ResultadoFinalComponent implements OnInit {

  gamesSelected: Game[];
  matchups;
  secondLevel;
  thirdLevel;
  winnerLevel;

  constructor(
    private storage: DataService,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.gamesSelected = this.storage.get('GAMES_SELECTED');

    if (this.gamesSelected === null) this.router.navigateByUrl('/fase-selecao');

    this.gamesSelected.sort((a, b) => a.titulo.localeCompare(b.titulo));

    this.matchups = this.matchUp(this.gamesSelected);

    this.secondLevel = this.matchups.map(([a, b]) => {
      const [winner] = this.winnerBetween(a, b);
      return {
        winner,
        children: [
          { winner: a, children: [] },
          { winner: b, children: [] },
        ],
      };
    });

    this.thirdLevel = this.matchEachTwo(this.secondLevel).map(([a, b]) => {
      const [winner] = this.winnerBetween(a.winner, b.winner);
      return {
        winner,
        children: [a, b],
      };
    });

    this.winnerLevel = this.matchEachTwo(this.thirdLevel).map(([a, b]) => {
      const [winner] = this.winnerBetween(a.winner, b.winner);
      return {
        winner,
        children: [a, b],
      };
    });
  }

  matchUp(games) {
    return Array.from({ length: Math.floor(games.length / 2) }, (_, i) => [
      games[i],
      games[games.length - 1],
    ]);
  }

  matchEachTwo(games) {
    return Array.from({ length: Math.floor(games.length / 2) }, (_, i) => [
      games[i * 2],
      games[i * 2 + 1],
    ]);
  }

  matchProp(a, b, prop) {
    if (a[prop] > b[prop]) {
      return [a, b];
    }
    if (a[prop] < b[prop]) {
      return [b, a];
    }
    return false;
  }

  matchNameOrder(a, b, prop) {
    if (a[prop].localeCompare(b[prop]) === -1) {
      return [a, b];
    }
    return [b, a];
  }

  winnerBetween(a, b) {
    return (
      this.matchProp(a, b, "nota") ||
      this.matchProp(a, b, "ano") ||
      this.matchNameOrder(a, b, "titulo")
    );
  }

}
