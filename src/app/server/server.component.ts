import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online{
            color:white
        }
    `]
})
export class ServerComponent{
    //string interpolation
    serverId:number=10;
    serverStatus:string='offline';

    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){
        this.serverStatus=Math.random() >0.5 ? 'online' : 'offline';
    }

    getColor(){
        return this.serverStatus==='online' ? 'green' : 'red';
    }
}