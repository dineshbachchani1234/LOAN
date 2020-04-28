import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  book: Customer=new Customer;
  message:any;
  userAddressValidations: FormGroup;
  submitted:boolean=false;
    constructor(private formBuilder: FormBuilder,private router:Router,private service:BookService) { }
    ngOnInit() {
      this.userAddressValidations = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9@#!$%^&*]+')]],
        email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
        mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[6-9]{1}[0-9]+')]],
        type: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(7), Validators.pattern('[a-zA-Z]+')]],
        adhar: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[1-9]{1}[0-9]+')]],
        pan: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]+')]],
        balance: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(1000000), Validators.pattern('[0-9]+')]]
      });
    
    
    }
    
    public adding()
    {
      this.submitted=true;
         if(this.userAddressValidations.invalid)
       {
         return;
       }
      let resp=this.service.addBook(this.userAddressValidations.value);
      resp.subscribe((data)=>this.message=data);
      console.log(this.userAddressValidations.value);
      alert("Added Successfully");
      this.router.navigate(['/home']); 
    }
    }