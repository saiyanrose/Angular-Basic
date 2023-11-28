import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  
  constructor(private service:LoggingService) { }

  ngOnInit() {

  }  

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountAdded.emit({name: accountName,status: accountStatus})
    //console.log("A server status changed, new status: " + accountStatus);
    //const service=new LoggingService();
    this.service.logStatusChange(accountStatus);
  }

}
