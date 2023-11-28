import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: "root",
})
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Customer Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingServie:LoggingService){}
    
      accountAdded(name: string, status: string) {
       this.accounts.push({name:name,status:status});
      }

      accountUpdate(id:number,newStatus:string){
        this.accounts[id].status =newStatus;
        this.loggingServie.logStatusChange(newStatus);
      }
}