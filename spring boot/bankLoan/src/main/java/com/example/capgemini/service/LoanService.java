package com.example.capgemini.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.capgemini.DAO.LoanDAO;
import com.example.capgemini.DAO.LoanRepository;
import com.example.capgemini.entity.Calculate;
import com.example.capgemini.entity.Customer;
import com.example.capgemini.entity.EMI;
import com.example.capgemini.entity.Loan;
import com.example.capgemini.entity.Money;

@Service
public class LoanService {
	
	@Autowired
	private LoanRepository repository;
	
	@Autowired
	private LoanDAO repo;
	
	
	public Customer saveCustomer(Customer customer)
	{
		return repository.save(customer);
	}
	
	public List<Customer> saveCustomers(List<Customer> customers)
	{
		return repository.saveAll(customers);
	}
	
	public List<Customer> getCustomers()
	{
		return repository.findAll();
	}
	
	public Customer getCustomerById(int id)
	{
		return repository.findById(id).orElse(null);
	}
	
	public Loan getLoanById(int id)
	{
		return repo.findById(id).orElse(null);
	}
	public Customer getCustomerByName(String name)
	{
		return repository.findByName(name);
	}
	
	public String deleteCustomer(int id)
	{
		return "Customer removed" +id;
	}
	public Integer applyLoan(Loan loan)
	{
//		if(loan.getLoan_id()==0)
//		{
//			return 0;
//		}
//		else
//		{
		loan.setLoan_balance(loan.getLoan_amount());
		double rate=10;
		Integer loan_id=null;
		double emi=Math.round((loan.getLoan_amount()*Math.pow((1+rate/100) ,(double)loan.getDuration()/12))/loan.getDuration());
		loan.setEmi(emi);
		repo.save(loan);
		System.out.println(emi);
		loan_id=loan.getLoan_id();
		System.out.println(loan_id);
		return loan_id;
		//return loan.getLoan_id();
//	}
	}
//	public Customer updateCustomer(Customer customer)
//	{
//		Customer existingCustomer=repository.findById(customer.getAcc_number()).orElse(null);
//		existingCustomer.setLoan_amount(customer.getLoan_amount());
//		existingCustomer.setDuration(customer.getDuration());
//		return repository.save(customer);
//	}
	
	public double updateLoan(EMI e)
	{
		System.out.println(e);
		Integer acc_number=e.getLoan_id()-1;
		Customer customer= repository.findById(acc_number).orElse(null);
		customer.setBalance(customer.getBalance()-e.getEmi());
		repository.save(customer);
		Loan loan=repo.findById(e.getLoan_id()).orElse(null);
		loan.setLoan_balance(loan.getLoan_balance()-e.getEmi());
		loan.setDuration(loan.getDuration()-1);
		//System.out.println(loan);
		repo.save(loan);
		return e.getEmi();
	}
	public double updateCustomer(Money money)
	{
		Customer customer =repository.findById(money.getAcc_number()).orElse(null);
		 customer.setBalance(money.getBalance()+customer.getBalance());
		//customer.toString();
		System.out.println(customer);
		repository.save(customer);
		return customer.getBalance();
	     //  Customer existingCustomer = repository.findById(customer.getAcc_number()).orElse(null);
//	       existingCustomer.setBalance(customer.getBalance()+existingCustomer.getBalance());
	//	return repository.save(customer);
	}
//	public double showBalance(int acc_number) {
//		return repository.showBalance(acc_number);
//		
//	}
	public double calulateemi(Calculate calculate) {
		double rate=10;
		double emi=Math.round((calculate.getLoan_amount()*Math.pow((1+rate/100) ,(double)calculate.getDuration()/12))/calculate.getDuration());
		System.out.println(calculate.getLoan_amount());
		System.out.println(calculate.getDuration());
		System.out.println(emi);
		return emi;	
	}
}