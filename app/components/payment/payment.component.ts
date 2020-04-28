import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
paymentform:FormGroup;
submitted:boolean=false;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.paymentform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("[A-Z][a-z]{2,14}")]],
      email: ['', [Validators.required, Validators.email]],
      cardname: ['',Validators.required, ],
      cardnumber: ['',[Validators.required,Validators.minLength(16),Validators.pattern("[0-9]{16}")] ],
      expmonth: ['',[Validators.required,Validators.pattern("[0-9]{2}")] ],
      expyear: ['',[Validators.required,Validators.minLength(4),Validators.pattern("[0-9]{4}")] ],
      cvv: ['',[Validators.required,Validators.minLength(3),Validators.pattern("[0-9]{3}")] ],
    });
  }

  public payment()
  {
    this.submitted = true;
    if (this.paymentform.invalid) {
      return;
    }
    alert("Payment Successful");
    this.router.navigate(['/login']);
  }
}
