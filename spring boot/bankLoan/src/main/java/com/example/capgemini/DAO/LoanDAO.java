package com.example.capgemini.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.capgemini.entity.Loan;

public interface LoanDAO extends JpaRepository<Loan, Integer> {

}
