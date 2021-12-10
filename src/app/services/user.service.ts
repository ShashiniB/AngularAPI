import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(pageNumber: number) {
    return this.http.get(`${this._url}?page=${pageNumber}`);
  }

  getUser(id:number){
    return this.http.get(`${this._url}/${id}`);
  }

  addUser(email: any, firstname: any, lastname: any) {
    const user = {
      email: email,
      firstname: firstname,
      lastname: lastname,
    };
    console.log(user);
    return this.http.post(this._url, user);
  }

  updateUser(id: any, name: any, job: any) {
    const user = {
      name: name,
      job: job,
    };
    return this.http.put(`${this._url}/${id}`, user);
  }

  deleteUser(id: any) {
    return this.http.delete(`${this._url}/${id}`);
  }
}
