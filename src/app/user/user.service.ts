import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }

  getUser(id: number) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }
}
