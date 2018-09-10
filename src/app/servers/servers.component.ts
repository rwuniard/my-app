import { Component, OnInit } from '@angular/core';

@Component({
  // This selector for html tag
  selector: 'app-servers',

  // This selector for <div app-servers=""></div>
  // selector: '[app-servers]',

  // This selector is for <div class="app-server"></div>
  // selector: '.app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
