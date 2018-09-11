import { Component, OnInit } from '@angular/core';

@Component({
  // This selector for html tag
  selector: 'app-servers',

  // This selector for <div app-servers=""></div>
  // selector: '[app-servers]',

  // This selector is for <div class="app-server"></div>
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // ',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClickAddServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }
}
