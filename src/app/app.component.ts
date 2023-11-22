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
}
