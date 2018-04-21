import { Injectable } from '@angular/core';

@Injectable()
export class ConfigValue {
  role_GV = 'ROLE_GV';
  token = 'token';
  url_port = 'http://127.0.0.1:8080/';
  auth_refresh = '/auth/refresh';
  auth_login = '/auth/login';
  remember = 'remember';
}
