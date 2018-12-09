import { Component, OnInit } from '@angular/core';
import { GamePlayService } from './game-play.service';
import { DrawPile } from './draw-pile.model';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  drawPile: DrawPile[];

  constructor(private gamePlayService: GamePlayService) { }

  ngOnInit() {
    this.fetchDrawPile();
  }

  fetchDrawPile() {
    this.gamePlayService
      .getDrawPile()
      .subscribe((data: DrawPile[]) => {
        this.drawPile = data;
        console.log('Data requested ...');
        console.log(this.drawPile);
      });
  }

}
