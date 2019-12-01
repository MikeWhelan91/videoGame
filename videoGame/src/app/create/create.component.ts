import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor( private gameService: GameServiceService ) { }

  ngOnInit() {
  }

  onAddGame(form: NgForm) {
    console.log(form.value);


    this.gameService.AddGameInformation(form.value.title,
      form.value.year, form.value.genre, form.value.rating, form.value.poster, form.value.review).subscribe();
    console.log(form.value);
    form.resetForm();
    }

}
