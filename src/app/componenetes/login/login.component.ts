import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  usuario: string = '';
  pass: string = '';

  Entrar()
  {
    console.log(this.usuario + ' ' +this.pass);
  }

  ngOnInit() {
  }

}
