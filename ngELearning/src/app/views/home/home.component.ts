import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit() {

  }
}
