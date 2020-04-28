import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
static bookstatic:Customer[];
baseUrl:string="/assets/data/books.json";
  constructor(private service:BookService,private http:HttpClient) {

    this.http.get<Customer[]>(this.baseUrl).subscribe(data=>
    {
      BookService.bookstatic=data;
    },err=>
  {
    console.log(err.stack);
  })
   }
  //  getBook()
  //  {
  //    return BookService.bookstatic;
  //  }
  //  removeBook(id:number)
  //  {
  //    BookService.bookstatic.splice(id,1);
  //    alert("Book " +id +"is deleted successfully");
  //  }


   public login(customer)
   {
    return this.http.post("http://localhost:8080/login",customer,{responseType:'text' as 'json'});
   }

   public addBook(customer)
   {
     return this.http.post("http://localhost:8080/signup",customer,{responseType:'text' as 'json'});
   }
   public addBalance(acc_number:number,balance:number)
   {
       return this.http.post("http://localhost:8080/add-balance",{"acc_number":acc_number,"balance":balance},{responseType: 'text' as 'json'});
   }
   public calculate(Calculate)
   {
     return this.http.post("http://localhost:8080/calculateEMI",Calculate,{responseType:'text' as 'json'});
   }

   public check(acc_number:number)
   {
     return this.http.get("http://localhost:8080/check-balance/"+acc_number);
   }
   public emishow(loan_id:number)
   {
     return this.http.get("http://localhost:8080/emishow/"+loan_id);
   }

   public Loan(loan)
     {
      return this.http.post("http://localhost:8080/loan",loan,{responseType: 'text' as 'json'});
     
   }
   public pay(loan_id,emi)
   {
     return this.http.post("http://localhost:8080/payemi",{"loan_id":loan_id,"emi":emi},{responseType: 'text' as 'json'});
   }


}