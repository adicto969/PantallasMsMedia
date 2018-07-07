import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class modelUser {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [modelUser]
})

export class LoginFormComponent implements OnInit {  

  constructor(private modelUser: modelUser, private router: Router) { }
  
  ngOnInit() {
  }

  loginUser(element)
  {
    element.preventDefault();
    console.log(this.modelUser);
    if(this.modelUser.email == "juan_comboy@hotmail.com" && this.modelUser.password == "123456")
      this.router.navigate(['/dashboard']);

  }

}
