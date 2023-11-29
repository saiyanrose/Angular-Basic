import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddeven',
  templateUrl: './oddeven.component.html',
  styleUrls: ['./oddeven.component.css']
})
export class OddevenComponent implements OnInit {
  numbers=[1,2,3,4,5];
  odd=[1,3,5];
  even=[2,4];
  onlyOdd=false;
  value=5;

  constructor() { } 

  ngOnInit() {}

}
