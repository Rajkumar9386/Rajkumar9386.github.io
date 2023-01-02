import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public signUp(){
    localStorage.setItem('token', 'demo');
    this.router.navigate(['/dashboard']);
  }
}
