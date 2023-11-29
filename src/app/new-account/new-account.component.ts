import { Component,OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']  
})
export class NewAccountComponent implements OnInit {  
  
  constructor(//private service:LoggingService,
    private accountservice:AccountService) {
      this.accountservice.statusUpdated.subscribe((status:string)=>
        alert('new status:'+status));
    }

  ngOnInit() {}  

  onCreateAccount(accountName: string, accountStatus: string){    
    this.accountservice.accountAdded(accountName,accountStatus);    
  }

}
