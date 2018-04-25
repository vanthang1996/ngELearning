import { Component, OnInit } from '@angular/core';
import { Teacher, Role } from '../../../_models';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../../_helpers/config-value';
import { collectExternalReferences } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'com-slidebar',
  templateUrl: 'slidebar.component.html'
})

export class SlidebarComponent implements OnInit {

  public teacher: Teacher;
  public role: Array<Role> = new Array();
  public isLogin = true;
  public mapMenuRole: Map<string, string> = new Map(); // key la url, value la ten menu

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private http: HttpClient,
    private config: ConfigValue
  ) { }

  ngOnInit() {

    this.getName();
    this.getRole();
  }

  getName(): void {
    this.http.get(this.config.url_port + '/teacher/info').subscribe((teacher: any) => {
      this.teacher = teacher;
    });
  }
  addMenuForTk(): void {
    this.mapMenuRole.set('/add-gv', 'Thêm giảng viên');
    this.mapMenuRole.set('/add-question', 'Thêm câu hỏi');
  }
  addMenuForGv(): void {

  }
  addMenuForTbm(): void {

  }

  getRole(): void {
    this.http.get(this.config.url_port + '/teacher/role').subscribe((role: any) => {
      role.forEach((e: string) => {
        this.role.push(new Role(e));
      });
      this.showMenuItemByRole();
    });
  }

  showMenuItemByRole(): void {
    this.role.forEach((w: Role) => {
      switch (w.roleID) {
        // tslint:disable-next-line:no-unused-expression
        case 'GV': this.addMenuForGv(); break;
        case 'TBM': this.addMenuForTbm(); break;
        case 'TK': this.addMenuForTk() ; break;
      }
    });
     this.mapMenuRole.forEach((key, value) => {
        console.log(key);
        console.log(value);
     });
  }
  getKeys(map){
    return Array.from(map.keys());
  }
}
