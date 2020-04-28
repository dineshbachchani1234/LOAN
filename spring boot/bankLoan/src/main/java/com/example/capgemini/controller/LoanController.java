package com.example.capgemini.controller;

import java.util.List;

import javax.management.relation.RelationNotFoundException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capgemini.entity.Calculate;
import com.example.capgemini.entity.Customer;
import com.example.capgemini.entity.EMI;
import com.example.capgemini.entity.Loan;
import com.example.capgemini.entity.Money;
import com.example.capgemini.service.LoanService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins="*")
public class LoanController {

	@Autowired
	private LoanService service;
	
	@PostMapping("/signup")
	public Customer addCustomer(@RequestBody Customer customer)
	{
		return service.saveCustomer(customer);
	}
	
	@GetMapping("/all")
	public List<Customer> allCustomers()
	{
		return service.getCustomers();
	}
	
	@GetMapping("/check-balance/{acc_number}")
	public double showBalance(@PathVariable int acc_number)
	{
		Customer c=service.getCustomerById(acc_number);
		return c.getBalance();
	}
	
	@GetMapping("/emishow/{loan_id}")
	public double showEMI(@PathVariable int loan_id)
	{
		Loan loan=service.getLoanById(loan_id);
		return loan.getEmi();
	}
	
	@PostMapping("/add-balance")
	public double addBalance(@RequestBody Money money)
	{
	
		System.out.println(money);	
		return service.updateCustomer(money);
	}
	@PostMapping("/loan")
	public Integer applyLoan(@RequestBody Loan loan)
	{
	return service.applyLoan(loan);
	}
	@PostMapping("/payemi")
	public double payEmi(@RequestBody EMI e)
	{
		return service.updateLoan(e);
	}
	
	@PostMapping("/calculateEMI")
	public double calculate(@RequestBody Calculate calculate)
	{
		return service.calulateemi(calculate);
	}
	
	@PostMapping("/login")
	public Integer loginverify(@RequestBody Customer customer)
	{
		//System.out.println(customer.toString());
		Integer acc_number=null;
		boolean idFound=false;
		for(Customer cust: service.getCustomers()) {
			//System.out.println(cust.toString());
			//System.out.println(customer.toString());
			if(cust.getEmail().equals(customer.getEmail()) && cust.getPassword().equals(customer.getPassword()))
			{
			acc_number=cust.getAcc_number();	
			idFound=true;
			System.out.println(cust.toString());
		//	System.out.println(customer.toString());
			break;
			}
		}
		return acc_number;
	}
}
