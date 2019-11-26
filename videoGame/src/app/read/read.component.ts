import { Component, OnInit } from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor( private gameService: GameServiceService) { }
  myGames: any;

  ngOnInit() {

    this.gameService.getGameInformation().subscribe(data => {
        this.myGames = data.games;
        });
    }
  }
