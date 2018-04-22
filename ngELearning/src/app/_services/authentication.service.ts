import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigValue } from '../_helpers/config-value';
import { User } from '../_models';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: HttpClient, private config: ConfigValue) {
    // kiểm tra có lưu trong local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string): Observable<any> {
    // return this.http.post<any>(this.config.auth_login, { email: email, password: password }) ;
    return this.http.post<any>(this.config.url_port + this.config.auth_login, {
      email: email,
      pwd: password
    }).map(user => {
       console.log(user);
      if (user && user.token) {
        localStorage.setItem(
          this.config.token,
          JSON.stringify(user.token)
        );
      }
      return user;
    });
  }

  // public createUser(username: string, password: string): Observable<any> {
  //   return this.http.post<any>('/api/users', { email: username, password: password });
  // }

  refreshToken(): any {
    return this.http.get(this.config.url_port + this.config.auth_refresh)
      .map(data => {
        let user: any = {};
        user = data;
        if (user && user.access_token) {
          localStorage.setItem(
            this.config.token,
            JSON.stringify(user.access_token)
          );
        }
        return user;
      },
        (err: HttpErrorResponse) => {
          if (err.status === 403) {
            console.log('Chưa đăng nhập!');
          }
        }
      );
  }

  getInformation(): any {
    return this.http.get(this.config.url_port + 'user/info')
      .map((user: User) => {
        return user;
      }
      );
  }

  logout(): void {
    // xóa khỏi local storage
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}

/**
 *  Thông tin người dùng đăng nhập được lưu vào bộ nhớ cục bộ nên người dùng sẽ vẫn đăng nhập khi refesh lại trang
 */
