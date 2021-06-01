import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  listUsuarios: Usuario[] = [
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Manuel', apellido: "Gomez", sexo: 'Masculino'},
    {usuario: "vmartinez", nombre: 'Vanessa', apellido: "Martinez", sexo: 'Femenino'},
    {usuario: "mrosales", nombre: 'Mario', apellido: "Rosales", sexo: 'Masculino'},
    {usuario: "palvarado", nombre: 'Paola', apellido: "Alvarado", sexo: 'Femenino'},
    {usuario: "lsuarez", nombre: 'Luis', apellido: "Suarez", sexo: 'Masculino'}
  
    
  ];
  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
