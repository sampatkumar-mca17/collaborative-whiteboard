import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiroBoard } from '../model/whiteboard.model';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  constructor(private http:HttpClient) { }

  getMiroBoardID():Observable<MiroBoard>{
    return this.http.get<MiroBoard>('https://api.miro.com/v2/boards',{
      headers:{
        authorization:`Bearer ${process?.env?.['bearer_token']}`
      }
    })
  }
}
