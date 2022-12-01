import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'book';
  title = 'Angular Search ';
  searchText: any;
  heroes = [
    { id: 126, name: 'Narco' , author: 'vallabah',publish:2001},
    { id: 125, name: 'pencil' , author: 'srinu',publish:1990},
    { id: 124, name: 'pen' , author: 'sethu',publish:1898},
    { id: 122, name: 'smart' , author: 'praveen',publish:1908},
    { id: 123, name: 'basic' , author: 'naveen',publish:2012}
 
  ];
}
