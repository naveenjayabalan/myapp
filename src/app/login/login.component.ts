import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if ( username === 'admin' && password === 'admin') {
        this.routes.navigate(['services']);
    }
  }

  public onLoginClick() {
    this.routes.navigate(['./services']);
  }
}
