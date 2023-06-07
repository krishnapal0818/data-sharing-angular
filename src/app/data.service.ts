import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storeMessage = new BehaviorSubject('this is deffalt message')
  cureentMsg = this.storeMessage.asObservable()
  constructor() { }

  updateMessage (msg:string){
    this.storeMessage.next(msg)
  } 
}
