import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    
  }
  title = 'myngfor';
   

  records = [
   {
     name : 'swarup',
     lname : 'devkar'
   },

   {
    name : 'pritam',
    lname : 'patil'
  },

  {
    name : 'xyz',
    lname : 'abc'
  }

  ]

}
