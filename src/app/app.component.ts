import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

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
  //providers:[AccountService]
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  
  accounts:{name:string,status:string}[]=[];
  

  constructor(private service:AccountService){}
  
  ngOnInit(): void {
    this.accounts=this.service.accounts;
  }

  onAccountAdded(name:string,status:string){

  }
}
