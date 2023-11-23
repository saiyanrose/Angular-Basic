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
  servers=[];

  @ViewChild('serverNameContent')serverNameContent:ElementRef;

  //disable button for 2sec
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }  
  
  onCreateServer(serverData:{serverId:number,serverStatus:string}){
    //@Output
    console.log('serverId and serverStatus: '+serverData.serverId+' '+serverData.serverStatus);    

    //show @viewChild()
    console.log('@viewChild(): '+this.serverNameContent.nativeElement.value);
    
    //set serverCreated to true
    this.serverCreated=true;

    //push into servers array
    this.servers.push(this.serverName);

    //set server info
    this.serverCreationStatus='server is created name: '+this.serverName;
  }

  //add server name
  onUpdateServerName(event:any){
    this.serverName=event.target.value;    
  }
  
}
