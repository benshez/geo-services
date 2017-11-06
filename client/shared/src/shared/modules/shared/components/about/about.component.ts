import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'geo-service-about',
  template: require('./about.component.html').toString()
})
export class AboutComponent implements OnInit {

  constructor(
  ) {
    // Do stuff
  }

  ngOnInit() {

  }
}
