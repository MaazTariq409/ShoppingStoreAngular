import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authResponseData, authenticateService } from './authenticate.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  loginMode = false
  isLoading = false
  error :string = null

  constructor(private authService : authenticateService, private router : Router) { }

  ngOnInit(): void {
  }

  changeLoginMode()
  {
    this.loginMode = !this.loginMode
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password

    let authObservable : Observable<authResponseData>

    this.isLoading = true
    if(this.loginMode){
      authObservable = this.authService.login(email, password);
    }
    else{
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe(
      data => {
        console.log(data)
        this.isLoading = false
        this.router.navigate(['./recipe'])
      },
      error => {
        console.log(error)
        this.error = "Error has Occurred"
        this.isLoading = false
      }
    );

    form.reset();
  }

}
