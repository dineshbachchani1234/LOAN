import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
message:any;
  constructor() { }

  ngOnInit() {
this.message=localStorage.loginName;
console.log(this.message);
  }

}
