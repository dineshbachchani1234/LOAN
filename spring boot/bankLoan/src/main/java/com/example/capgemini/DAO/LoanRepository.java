package com.example.capgemini.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.capgemini.entity.Customer;

public interface LoanRepository extends JpaRepository<Customer, Integer>{

	Customer findByName(String name);
//	public int applyLoan(Customer cust);
}
