import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';
import { Location } from '@angular/common';
import { OwnerForCreation } from 'src/app/model/OwnerForCreation';

@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  
}
}
