import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'geo-service-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
