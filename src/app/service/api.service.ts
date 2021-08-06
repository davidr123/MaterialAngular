import { Injectable } from '@angular/core';
import {LoginI} from'../modelos/login.interface';
import {ResponseI} from '../modelos/response.interface';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import{Observable} from 'rxjs';
import { Users } from '../interfaces/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user';
import { UserInterface } from '../interfaces/UserInterface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userName(userName: any) {
    throw new Error('Method not implemented.');
  }
  url: string= "http://solodata.es/"
  //API REGISTER

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  private myAppurlRegister ='http://localhost:16646/';
  private myApiurlRegister= 'api/Authentication/Register';

    //API LOGIN
  private myAppurlLogin ='http://localhost:16646/';
  private myApiurlLogin= 'api/Authentication/Login';

  constructor(private http: HttpClient, private fb: FormBuilder) { 

    
  }

 
  

form= this.fb.group({
  username:['', Validators.required],
  email:['', Validators.required],
  password:['', Validators.required]
})

  loginByEmail(username: string, password: string): Observable<User>{

    let headerOptions = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access- Control-Allow-Origin': '*' });
    
   let headers: {  "Access-Control-Allow-Origin:": "*"};
   const params={
    username: 'username',
password: 'password'
   }
    return this.http.post<User>(this.myAppurlLogin + this.myApiurlLogin, params, { 
      headers: new HttpHeaders()
                .set('Authorization', 'Basic ' + btoa(username + ':' + password))
                .set('Content-Type','application/json')
                .set('Access-Control-Allow-Credential','true')
    });

  }

  saveRegister(userName: string, email: string, password: string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };
    



  
 
    var body={
      userName: 'username',
      email: 'email',
      password: 'password'

    }

    return this.http.post<UserInterface>(this.myAppurlRegister + this.myApiurlRegister, body, httpOptions).pipe
    ();

  }

  getListaUsuario(): Observable<any>{

    return this.http.get(this.myAppurlRegister + this.myApiurlRegister);
  }

  setToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }



}
