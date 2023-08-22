package com.app.Entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="helper")
public class Helper {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int helperId;
	private String helperName;
	private String helperPassword;
	@Column(unique = true)
	private String helperEmail;
	private String helperMobileNumber;
	private String helperAddress;
	private String helperAdharcard;
	private String helperCity;
	private String helperPincode;
	private String servicename;
	private boolean isAvalible;
	@OneToMany(mappedBy = "helper")
	@JsonIgnore
	private List<Review>reviewList;
	
	@OneToMany(mappedBy = "helper")
	@JsonIgnore
	private List<ServiceName>ServiceNameList;
	
	@OneToMany(mappedBy = "helper")
	@JsonIgnore
	private List<BookingInfo>bookInfo;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userId")
	private User user;
	
	public Helper() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Helper(int helperId, String helperName, String helperPassword, String helperEmail, String helperMobileNumber,
			String helperAddress, String helperAdharcard, String helperCity, String helperPincode, String servicename,
			boolean isAvalible, List<Review> reviewList, List<ServiceName> serviceNameList, User user) {
		super();
		this.helperId = helperId;
		this.helperName = helperName;
		this.helperPassword = helperPassword;
		this.helperEmail = helperEmail;
		this.helperMobileNumber = helperMobileNumber;
		this.helperAddress = helperAddress;
		this.helperAdharcard = helperAdharcard;
		this.helperCity = helperCity;
		this.helperPincode = helperPincode;
		this.servicename = servicename;
		this.isAvalible = isAvalible;
		this.reviewList = reviewList;
		ServiceNameList = serviceNameList;
		this.user = user;
	}

	public List<Review> getReviewList() {
		return reviewList;
	}
	public void setReviewList(List<Review> reviewList) {
		this.reviewList = reviewList;
	}
	public List<ServiceName> getServiceNameList() {
		return ServiceNameList;
	}
	public void setServiceNameList(List<ServiceName> serviceNameList) {
		ServiceNameList = serviceNameList;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Helper(int helperId, String helperName, String helperPassword, String helperEmail, String helperMobileNumber,
			String helperAddress, String helperAdharcard, String helperCity, String helperPincode,
			String servicename, boolean isAvalible) {
		super();
		this.helperId = helperId;
		this.helperName = helperName;
		this.helperPassword = helperPassword;
		this.helperEmail = helperEmail;
		this.helperMobileNumber = helperMobileNumber;
		this.helperAddress = helperAddress;
		this.helperAdharcard = helperAdharcard;
		this.helperCity = helperCity;
		this.helperPincode = helperPincode;
		this.servicename = servicename;
		this.isAvalible = isAvalible;
	}
	
	
	public int getHelperId() {
		return helperId;
	}
	public Helper(int helperId, String helperName, String helperPassword, String helperEmail, String helperMobileNumber,
			String helperAddress, String helperAdharcard, String helperCity, String helperPincode, boolean isAvalible) {
		super();
		this.helperId = helperId;
		this.helperName = helperName;
		this.helperPassword = helperPassword;
		this.helperEmail = helperEmail;
		this.helperMobileNumber = helperMobileNumber;
		this.helperAddress = helperAddress;
		this.helperAdharcard = helperAdharcard;
		this.helperCity = helperCity;
		this.helperPincode = helperPincode;
		this.isAvalible = isAvalible;
	}


	public boolean isAvalible() {
		return isAvalible;
	}
	public void setAvalible(boolean isAvalible) {
		this.isAvalible = isAvalible;
	}
	public void setHelperId(int helperId) {
		this.helperId = helperId;
	}
	public String getHelperName() {
		return helperName;
	}
	public void setHelperName(String helperName) {
		this.helperName = helperName;
	}
	public String getHelperPassword() {
		return helperPassword;
	}
	public void setHelperPassword(String helperPassword) {
		this.helperPassword = helperPassword;
	}
	public String getHelperEmail() {
		return helperEmail;
	}
	public void setHelperEmail(String helperEmail) {
		this.helperEmail = helperEmail;
	}
	public String getHelperMobileNumber() {
		return helperMobileNumber;
	}
	public void setHelperMobileNumber(String helperMobileNumber) {
		this.helperMobileNumber = helperMobileNumber;
	}
	public String getHelperAddress() {
		return helperAddress;
	}
	public void setHelperAddress(String helperAddress) {
		this.helperAddress = helperAddress;
	}
	public String getHelperAdharcard() {
		return helperAdharcard;
	}
	public void setHelperAdharcard(String helperAdharcard) {
		this.helperAdharcard = helperAdharcard;
	}
	public String getHelperCity() {
		return helperCity;
	}
	public void setHelperCity(String helperCity) {
		this.helperCity = helperCity;
	}
	public String getHelperPincode() {
		return helperPincode;
	}
	public void setHelperPincode(String helperPincode) {
		this.helperPincode = helperPincode;
	}
	public String getServicename() {
		return servicename;
	}
	public void setServicename(String servicename) {
		this.servicename = servicename;
	}
	
	public List<BookingInfo> getBookInfo() {
		return bookInfo;
	}

	public void setBookInfo(List<BookingInfo> bookInfo) {
		this.bookInfo = bookInfo;
	}

	@Override
	public String toString() {
		return "Helper [helperId=" + helperId + ", helperName=" + helperName + ", helperPassword=" + helperPassword
				+ ", helperEmail=" + helperEmail + ", helperMobileNumber=" + helperMobileNumber + ", helperAddress="
				+ helperAddress + ", helperAdharcard=" + helperAdharcard + ", helperCity=" + helperCity
				+ ", helperPincode=" + helperPincode + ", servicename=" + servicename + ", isAvalible=" + isAvalible
				+ "]";
	}
	
	

}
