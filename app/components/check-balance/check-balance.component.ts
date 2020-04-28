import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Customer } from 'src/app/model/customer';
@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
   check:FormGroup;
   customer:Customer =new Customer();
   submitted:boolean=false;
  message: any;
  constructor(private formBuilder:FormBuilder,private router:Router,private service:BookService) { 

  
  }

  ngOnInit() {

     this.check=this.formBuilder.group({
       //balance:['',Validators.required]
       balance: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern('[1-9]{1}[0-9]+')]]  
      
      });
  this.checkBalance();
  }

  public checkBalance()
  {
    let b=this.service.check(localStorage.store);
    b.subscribe((data)=>this.message=data);

  }

   public addingbalance()
   {
     this.submitted=true;
     if(this.check.invalid)
   {
     return;
   }
   console.log(this.check.value);
   let resp1=this.service.addBalance(localStorage.store,this.check.controls.balance.value);
   resp1.subscribe((data)=>this.message=data);
   this.router.navigate(['/payment']);
   }
}
