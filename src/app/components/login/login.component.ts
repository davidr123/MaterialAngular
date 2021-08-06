import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ApiService} from '../../service/api.service';
import { LoginI} from '../../modelos/login.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/iLogin';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/app/interfaces/iResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form: FormGroup;
loading= false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private _loginService: ApiService,
    private http: HttpClient) {
    this.form= this.fb.group({
      UserName:['', Validators.required],
      Password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }




onLogin(){

  const userLogin: ILogin={
    UserName:this.form.value.UserName,
    Password: this.form.value.Password
    
  };
  
 
  this.http.post<IResponse>('http://localhost:16646/api/Authentication/Login', userLogin,
  {observe: 'response'}).subscribe(data=>{
    const token = data.body?.response;
    console.log(data);
    console.log('token', token);

    sessionStorage.setItem('token',token!);
    
    this.router.navigate(['/character-list']);
    this._snackBar.open("Logeiado");
    
  }, err=>{
    this._snackBar.open('Erro de Logueo');
  });

}



}





