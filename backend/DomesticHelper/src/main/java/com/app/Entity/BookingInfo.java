package com.app.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BookingInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date bookingStartDate;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date bookingEndDate;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "helperId")
	
	private Helper helper;

	@ManyToOne(fetch = FetchType.EAGER)
	
	@JoinColumn(name = "userId")
	
	private User user;

	public BookingInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookingInfo(int bookingId, Date bookingStartDate, Date bookingEndDate, Helper helper, User user) {
		super();
		this.bookingId = bookingId;
		this.bookingStartDate = bookingStartDate;
		this.bookingEndDate = bookingEndDate;
		this.helper = helper;
		this.user = user;
	}
	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public BookingInfo(int bookingId, Date bookingStartDate, Date bookingEndDate, Helper helper) {
		super();
		this.bookingId = bookingId;
		this.bookingStartDate = bookingStartDate;
		this.bookingEndDate = bookingEndDate;
		this.helper = helper;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public Date getBookingStartDate() {
		return bookingStartDate;
	}

	public void setBookingStartDate(Date bookingStartDate) {
		this.bookingStartDate = bookingStartDate;
	}

	public Date getBookingEndDate() {
		return bookingEndDate;
	}

	public void setBookingEndDate(Date bookingEndDate) {
		this.bookingEndDate = bookingEndDate;
	}

	public Helper getHelper() {
		return helper;
	}

	public void setHelper(Helper helper) {
		this.helper = helper;
	}
	

	

}
