import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
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
