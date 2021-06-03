import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginInterface} from '../model/login.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user: LoginInterface = {};
  authenticated = "";
  active = "";

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(`assets/users.json`);
  }
}
