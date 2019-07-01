import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
import { format } from 'url';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario

  constructor() {
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log('Evento submit lanzado');
    console.log(this.usuario);
    form.reset();// para resetear todo el formulario
  }

}
