import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private httpc: HttpClient) { }

getgames(): Observable <any>{
  return this.httpc.get('https://jsonblob.com/9417cbbe-108a-11ea-827d-a3afa4296f98')
  }

  
}
