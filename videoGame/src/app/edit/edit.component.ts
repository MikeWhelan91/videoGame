import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  game: any = [];
  constructor( private router: Router, private route: ActivatedRoute,
               private gameService: GameServiceService) { }

  ngOnInit() {
    /* tslint:disable:no-string-literal */
    this.gameService.getGame(this.route.snapshot.params['id']).subscribe(data => {
      this.game = data;
      console.log(this.game);
      });
  }

  onEditGame(form: NgForm) {
    this.gameService.updateGame(this.game._id, form.value.title,
    form.value.year, form.value.poster).subscribe();
    this.router.navigate(['/read']);
    }

}
