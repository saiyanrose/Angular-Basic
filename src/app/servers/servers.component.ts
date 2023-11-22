import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  //selector: 'app-servers', 
  //selector: '[app-servers]', by attribute name
  selector: '.app-servers', //by class name
  //selecting by id won't support
  
  templateUrl: './servers.component.html',
  /*template:'<app-server></app-server>'*//**write html code in typescript */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{  
  allowNewServer:boolean=false;
  serverCreationStatus='no server was created';
  serverName="";
  serverCreated=false;
  servers=['test','test1'];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server is created name: '+this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName=event.target.value;    
  }
}
