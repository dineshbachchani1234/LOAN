import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Book Management!';
  todaysDate =new Date();
  constructor()
  {
    setInterval(()=>
  {
    this.todaysDate=new Date();
  },1000)
  }

  
}
