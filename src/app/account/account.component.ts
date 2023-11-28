import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    
    this.accountservice.accountUpdate(this.id,status);
    this.accountservice.statusUpdated.emit(status);
    //this.service.logStatusChange(status);
  }

  constructor(//private service:LoggingService
    private accountservice:AccountService) { }

  ngOnInit() {
  }

}
