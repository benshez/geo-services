import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'geo-service-home',
  template: require('./home.component.html').toString()
})
export class HomeComponent implements OnInit {

  constructor(
  ) {
    // Do stuff
  }

  ngOnInit() {

  }
}
