import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://reqres.in/api/users?page=';
  constructor(private http:HttpClient) { }
  data:any;

  listUsers(){
    const pageNumber =2; //pagination eke click wena number eka methanta assign karanna. pageNumbe kyna variable eka ain karala kelinma 15 line eke pageNumber kyala thyena ekata e variable eka assign karanna.
   return this.http.get(this.baseUrl+pageNumber  + 'users');
  }
}
