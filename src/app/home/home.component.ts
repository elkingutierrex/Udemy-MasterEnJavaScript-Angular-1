import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public identificado : boolean;
  public nom :string;

  constructor() {
    this.identificado = false;
    return
  }

  ngOnInit() {
  }

  setIdentificado() {
    this.identificado = true;
  }

  unsetIdentificado() {
    this.identificado = false;
  }

}
