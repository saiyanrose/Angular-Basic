import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


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

  servers=['test'];

  @ViewChild('serverNameContent')serverNameContent:ElementRef;

  
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }  
  
  onCreateServer(serverData:{serverId:number,serverStatus:string}){    
    console.log(serverData);
    
    console.log('@viewChild(): '+this.serverNameContent.nativeElement.value);
        
    this.serverCreated=true;
    
    this.servers.push(this.serverName);
   
    this.serverCreationStatus='server is created name: '+this.serverName;
  }
  
  onUpdateServerName(event:any){
    this.serverName=event.target.value;    
  }  
  
}
