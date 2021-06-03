import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../service/auth-service.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public authGetData: AuthServiceService) { }

  ngOnInit(): void {
  }
  logout(): void{
    this.authGetData.authenticated = 'false';
    localStorage.setItem('', this.authGetData.authenticated);
  }
}
