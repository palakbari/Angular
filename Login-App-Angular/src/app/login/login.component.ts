import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent 
{
  loginForm = new FormGroup
  (
    {
      UserName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      Password : new FormControl('',[Validators.required,Validators.minLength(3)]) 
    }
  )

  IsAuthenticationFailed : boolean;

  constructor(private router : Router, private httpClient : HttpClient)
  {
    this.IsAuthenticationFailed = false;
  }

  login()
  {
    // if(this.loginForm.controls.UserName.value=="palak" && this.loginForm.controls.Password.value=="0408")
    // {
    //   this.router.navigate(['customer'])
    // }  
    // else
    // {
    //   this.IsAuthenticationFailed = true;
    // }
  

    this.httpClient.post("http://localhost:4000/login", this.loginForm.value).subscribe((response : object) =>
    {
      if(Object.keys(response)[0] != "token")
      {
        this.IsAuthenticationFailed = true
      }
      else
      {
        localStorage.setItem("token", JSON.stringify(Object.values(response)));
        let username = this.loginForm.controls.UserName.value;
        localStorage.setItem("UserName", JSON.stringify(username));
        this.router.navigate(['customer'])
      }
    })
  }
}
