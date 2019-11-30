import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyGames: any = [];
  constructor(private gameService: GameServiceService) { }


  ngOnInit() {

    this.gameService.getGameInformation().subscribe((data) => {
      this.MyGames = data.games;
      console.log(this.MyGames);
    });
  }


  onDelete(id: string){

    this.gameService.DeleteGame(id).subscribe(
      () =>{
        this.ngOnInit();
      }
    );
  }


}
