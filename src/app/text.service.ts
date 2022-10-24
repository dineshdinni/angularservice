import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private http:HttpClient) { }
  gettodaysdate(){
    let date = new Date();
    return date;
  }
  getmyName(){
    return ('dinesh');
  }
  getallusersInfo():Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
  }
  }

