import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/interfaces/iRegister';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { Users } from 'src/app/interfaces/users';
import { LoginI } from 'src/app/modelos/login.interface';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient,
    private _usuarioService: ApiService, private _snackBar: MatSnackBar, private route: Router) 
  {
    this.form= this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });


   }

 


  ngOnInit(): void {

  }

 
  registrar(){
   const UserRegister: IRegister={
     UserName: this.form.value.UserName,
     Email: this.form.value.Email,
     Password: this.form.value.Password
   };

 this.http.post<IRegister>('http://localhost:16646/api/Authentication/Register', UserRegister)
 .subscribe(
   user=>{
    console.log("dad", user);
    this._snackBar.open('Usuario Registrado con exito');
    this.route.navigate(['/dashboard']);
 }, err=>{
    console.log(err);
 })

  }



  


}
