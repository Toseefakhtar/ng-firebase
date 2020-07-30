import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  getPosts(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
