import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  username: string;
  password: string;

  constructor(private router : Router) {}

  onLogin(): void 
  {
    if (this.username == 'admin' && this.password == 'admin') 
    {
      this.router.navigate(['/admin-home']);
    } 
    else if (this.username ==  this.password) 
    {
      this.router.navigate(['/customer-home']);
    } 
    else 
    {
      alert('Invalid username or password');
    }
  }
}
