import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ApiService} from '../../service/api.service';
import { LoginI} from '../../modelos/login.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form: FormGroup;
loading= false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form= this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }



  ingresar(){
const  usuario= this.form.value.usuario;
const  password= this.form.value.password;

if(usuario== 'jperez' && password== '123'){
this.fakeLoading();
}else{
this.error();
this.form.reset();
}
}

error(){
  this._snackBar.open('Usuario o Contraseña ingresados son invalidos', '', {
    duration:5000,
    horizontalPosition: 'center',
    verticalPosition:'bottom'
  });


}

fakeLoading(){
  this.loading= true;
  setTimeout(()=>{

    //Redireccionamos al dashboard
   this.router.navigate(['dashboard']);
  }, 1500)
}


}
