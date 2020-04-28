import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';
import { PayEmiComponent } from './components/pay-emi/pay-emi.component';
import { ShowTransactionsComponent } from './components/show-transactions/show-transactions.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhyComponent } from './components/why/why.component';
import { CalculateemiComponent } from './components/calculateemi/calculateemi.component';
import { ForecloseComponent } from './components/foreclose/foreclose.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EmishowComponent } from './components/emishow/emishow.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'checkBalance',component:CheckBalanceComponent},
{path:'applyLoan',component:ApplyLoanComponent},
{path:'payEmi',component:PayEmiComponent},
{path:"calculateemi",component:CalculateemiComponent},
{path:'showTransactions',component:ShowTransactionsComponent},
{path:"foreclose",component:ForecloseComponent},
{path:"about",component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"why",component:WhyComponent},
{path:"payment",component:PaymentComponent},
{path:"emishow",component:EmishowComponent},
{path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
