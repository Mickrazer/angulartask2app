import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LoginInterface} from '../../model/login.interface';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form = new FormGroup({});
  public fieldTextType = false;
  public user: LoginInterface = {};

  constructor(private authGetData: AuthServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
    this.authGetData.getData().subscribe((data: LoginInterface) => this.user = data);
  }

  submitForm(): any {
    if (this.form.value.login === this.user.login && this.form.value.password === this.user.password) {
      this.authGetData.authenticated = 'true';
      this.authGetData.active = 'true';
      this.router.navigate(['first-task']);
      localStorage.setItem('',this.authGetData.authenticated);
      localStorage.setItem('1',this.authGetData.active);
    } else {
      this.form = new FormGroup({
        login: new FormControl(''),
        password: new FormControl('')
      });
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
