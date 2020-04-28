import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEmiComponent implements OnInit {

  message:any;
  emiform:FormGroup;
  submitted:boolean=false;
  constructor(private service:BookService,private router:Router,private formBuilder:FormBuilder) { }
  ngOnInit(): void {

    this.emiform=this.formBuilder.group({
    //  emi:['',Validators.required]
    emi: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern('[1-9]{1}[0-9]+')]]      
  
  });
   }
  
payEmi()
{
  this.submitted=true;

  if(this.emiform.invalid)
  {
    return ;
  }
  this.service.pay(localStorage.loanid,this.emiform.controls.emi.value).subscribe(data=>this.message=data);
  this.router.navigate(['/login']);
}
}