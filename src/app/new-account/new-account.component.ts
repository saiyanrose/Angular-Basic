import { Component,OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  
  constructor(//private service:LoggingService,
    private accountservice:AccountService) {
      this.accountservice.statusUpdated.subscribe((status:string)=>
        alert('new status:'+status));
     }

  ngOnInit() {

  }  

  onCreateAccount(accountName: string, accountStatus: string){
    //this.accountAdded.emit({name: accountName,status: accountStatus})
    //console.log("A server status changed, new status: " + accountStatus);
    //const service=new LoggingService();
    
    this.accountservice.accountAdded(accountName,accountStatus);
    //this.service.logStatusChange(accountStatus);
  }

}
