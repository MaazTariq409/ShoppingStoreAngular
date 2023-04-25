import { Component, OnInit } from '@angular/core';
import { authenticateService } from './authenticate/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService : authenticateService) {}
  ngOnInit(){
    this.authService.autoLogin();
  }
}
