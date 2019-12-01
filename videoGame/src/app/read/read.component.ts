import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';
import {FormControl,ReactiveFormsModule} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyGames: any = [];
  constructor(private gameService: GameServiceService) { }

  myControl = new FormControl();
  options: string[] = ['Horror', 'Adventure', 'Fantasy', 'Shooter'];
  filteredOptions: Observable<string[]>;
 
  ngOnInit() {

    this.gameService.getGameInformation().subscribe((data) => {
      this.MyGames = data.games;
      console.log(this.MyGames);
    });

    //attempt at filtering  
    //this.filteredOptions = this.myControl.valueChanges
     // .pipe(
       // startWith(''),
       // map(value => this._filter(value))
      //);
  

  //private _filter(value: string): string[] {
    //const filterValue = value.toLowerCase();

    //return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  onDelete(id: string){

    this.gameService.DeleteGame(id).subscribe(
      () =>{
        this.ngOnInit();
      }
    );
  }


  
}



