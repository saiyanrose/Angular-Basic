import { AfterContentInit, DoCheck, EventEmitter, Input, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { Component, OnChanges, OnInit } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online{
            color:white
        }
    `]
})
export class ServerComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,OnDestroy{    
    serverId:number=10;
    serverStatus:string='offline';
    
    @Input()allservers:[serverName:string];

    @Output()getServerDetails=new EventEmitter<{serverId:number,serverStatus:string}>();

    constructor(){
        console.log('constructor called');                        
        this.serverStatus=Math.random() >0.5 ? 'online' : 'offline';
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy called');
    }    

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit called');
    }
    
    ngDoCheck(): void {
        console.log('ngDoCheck called');
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
    
    onCreateServer(){
        this.getServerDetails.emit({serverId:this.serverId,serverStatus:this.serverStatus});
    }
    
    getServerStatus(){
        console.log('servers from servers component to server component: '+this.allservers);
        return this.serverStatus;
    }
    
    getColor(){
        return this.serverStatus==='online' ? 'green' : 'red';
    }

    onDestroyFirst(){
        console.log(this.allservers);
        this.allservers.splice(0,1);        
    }
   
}