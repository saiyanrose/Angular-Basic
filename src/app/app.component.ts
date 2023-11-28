import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**inline styles */
  /*styles:[`
        h3{
          color:red
        }
  `]*/
})
export class AppComponent {
  title = 'my-first-app';
  
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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
