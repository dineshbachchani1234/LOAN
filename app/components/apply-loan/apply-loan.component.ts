import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from 'src/app/service/book.service';
import { Loan } from "src/app/model/Loan";

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  loan:Loan=new Loan();
  message:any;
  data:number;
  addForm: FormGroup;
submitted:boolean=false;
  constructor(private formBuilder: FormBuilder,private router:Router,private service:BookService) { }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      loan_amount: ['', Validators.required, ],
      duration: ['', Validators.required]
    });
  
  
  }

  
  applyloan()
  {
    this.loan=this.addForm.value;
    this.submitted=true;
    if(this.addForm.invalid)
  {
    return;
  }
  
    
    if(localStorage.loanid<localStorage.store)
    {
      this.service.Loan(this.loan).subscribe(data=>{
        console.log(data);
      localStorage.loanid=data;
      alert("Added Successfully");
      this.router.navigate(['/emishow']);  
    })
  };
  if(localStorage.loanid>localStorage.store)
  {
    alert("One Loan is going on \n Can't apply for another loan");
  }
     }
}