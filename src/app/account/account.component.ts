import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']  
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {    
    this.accountservice.accountUpdate(this.id,status);
    this.accountservice.statusUpdated.emit(status);    
  }

  constructor(//private service:LoggingService
    private accountservice:AccountService) { }

  ngOnInit() {}

}
