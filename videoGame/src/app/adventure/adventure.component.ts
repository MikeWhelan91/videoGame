import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

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
