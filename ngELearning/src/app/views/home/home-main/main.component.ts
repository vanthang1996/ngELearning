import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  templateUrl: 'main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: any;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    // this.authentication.
  }
}
