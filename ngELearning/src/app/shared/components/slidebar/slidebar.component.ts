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
  public mapMenuRole: Map<string, Array<string>> = new Map(); // key la url, value la ten menu
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
    this.mapMenuRole.clear();
    this.mapMenuRole.set('/tk/them-giang-vien', Array('fas fa-user-plus', 'Thêm giảng viên'));
    this.mapMenuRole.set('/tk/phan-cong-day', Array('fab fa-forumbee', 'Phân công dạy'));
  }
  addMenuForTbm(): void {
    this.mapMenuRole.clear();
    this.mapMenuRole.set('/tbm/bo-mon', Array('fas fa-archive', 'Bộ môn'));
    this.mapMenuRole.set('/tbm/phan-cong', Array('fab fa-forumbee', 'Phân công'));
    this.mapMenuRole.set('/tbm/duyet', Array('fas fa-check', 'Duyệt'));
    this.mapMenuRole.set('/tbm/chi-tiet-phan-cong', Array('fas fa-list', 'Chi tiết phân công'));
    this.mapMenuRole.set('/tbm/tao-de-thi', Array('fas fa-edit', 'Tạo đề thi'));
  }
  addMenuForGv(): void {
    this.mapMenuRole.clear();
    this.mapMenuRole.set('/gv/mon-hoc', Array('fas fa-folder', 'Môn học'));
    this.mapMenuRole.set('/gv/cong-viec', Array('fas fa-briefcase', 'Công việc'));
    this.mapMenuRole.set('/gv/soan-cau-hoi', Array('fas fa-edit', 'Soạn câu hỏi'));
  }

  getRole(): void {
    this.http.get(this.config.url_port + '/teacher/role').subscribe((role: any) => {
      role.forEach((e: string) => {
        this.role.push(new Role(e));
      });
    });
  }


  showMenuItemByRole(value): void {
    switch (value) {
      case 'GV': this.addMenuForGv(); break;
      case 'TBM': this.addMenuForTbm(); break;
      case 'TK': this.addMenuForTk(); break;
    }
  }
  getKeys(map) {
    return Array.from(map.keys());
  }
}
