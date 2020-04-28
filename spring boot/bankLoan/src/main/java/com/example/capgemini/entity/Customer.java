package com.example.capgemini.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int acc_number;
	private String password;
	private String name;
	private long mobile;
	private String type;
	private long adhar;
	private String pan;
	private double balance;
	private String email;
	
	@OneToMany(mappedBy="customer",cascade=CascadeType.ALL)
	private List<Transactions> transaction=new ArrayList<>();

	public Customer(String name,String password, long mobile, String type, long adhar, String pan, int balance,
			double loan_amount, double loan_balance, double emi) {
		super();
		this.name = name;
		this.mobile = mobile;
		this.type = type;
		this.adhar = adhar;
		this.pan = pan;
		this.balance = balance;

	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Transactions> getTransaction() {
		return transaction;
	}

	public void setTransaction(List<Transactions> transaction) {
		this.transaction = transaction;
	}

	//	Customer c=new Customer(name,number,type,adhar,pan,balance);
	public Customer(String name,String password,String email,long mobile,String type, long adhar,String pan,int balance)
	{
		this.name=name;
		this.password=password;
		this.mobile=mobile;
		this.type=type;
		this.adhar=adhar;
		this.pan=pan;
		this.balance=balance;
		this.email=email;
		
	}
	public  int getAcc_number() {
		return acc_number;
	}
	public  void setAcc_number(int acc_number) {
		this.acc_number = acc_number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public long getAdhar() {
		return adhar;
	}
	public void setAdhar(long adhar) {
		this.adhar = adhar;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public Customer() {
		super();
		}

	@Override
	public String toString() {
		return "Customer [acc_number=" + acc_number + ", password=" + password + ", name=" + name + ", mobile=" + mobile
				+ ", type=" + type + ", adhar=" + adhar + ", pan=" + pan + ", balance=" + balance + ", email=" + email
				+ "]";
	}
	
}

