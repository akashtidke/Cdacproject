package com.app.Entity;

import java.util.ArrayList; 
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;






@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String userName;
	private String userPassword;
	private String userEmail;
	private String userMobileNumber;
	private String userAddress;
	private String userAdharcard;
	private String userCity;
	private String userPincode;
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Helper>userperHelperList;
@OneToMany(mappedBy = "user")
@JsonIgnore
private List<BookingInfo>bookinInfoUser;
	
	
	public User(int userId, String userName, String userPassword, String userEmail, String userMobileNumber,
		String userAddress, String userAdharcard, String userCity, String userPincode, List<Helper> userperHelperList,
		List<BookingInfo> bookinInfoUser) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.userPassword = userPassword;
	this.userEmail = userEmail;
	this.userMobileNumber = userMobileNumber;
	this.userAddress = userAddress;
	this.userAdharcard = userAdharcard;
	this.userCity = userCity;
	this.userPincode = userPincode;
	this.userperHelperList = userperHelperList;
	this.bookinInfoUser = bookinInfoUser;
}
	public List<BookingInfo> getBookinInfoUser() {
	return bookinInfoUser;
}
public void setBookinInfoUser(List<BookingInfo> bookinInfoUser) {
	this.bookinInfoUser = bookinInfoUser;
}
	public List<Helper> getUserperHelperList() {
		return userperHelperList;
	}
	public void setUserperHelperList(List<Helper> userperHelperList) {
		this.userperHelperList = userperHelperList;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int userId, String userName, String userPassword, String userEmail, String userMobileNumber,
			String userAddress, String userAdharcard, String userCity, String userPincode,
			List<Helper> userperHelperList) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userMobileNumber = userMobileNumber;
		this.userAddress = userAddress;
		this.userAdharcard = userAdharcard;
		this.userCity = userCity;
		this.userPincode = userPincode;
		this.userperHelperList = userperHelperList;
	}
	public User(int userId, String userName, String userPassword, String userEmail, String userMobileNumber,
			String userAddress, String userAdharcard, String userCity, String userPincode) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userMobileNumber = userMobileNumber;
		this.userAddress = userAddress;
		this.userAdharcard = userAdharcard;
		this.userCity = userCity;
		this.userPincode = userPincode;
	}
	public int getUserId() {
		return userId;
	}
	
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserMobileNumber() {
		return userMobileNumber;
	}
	public void setUserMobileNumber(String userMobileNumber) {
		this.userMobileNumber = userMobileNumber;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getUserAdharcard() {
		return userAdharcard;
	}
	public void setUserAdharcard(String userAdharcard) {
		this.userAdharcard = userAdharcard;
	}
	public String getUserCity() {
		return userCity;
	}
	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}
	public String getUserPincode() {
		return userPincode;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userPassword=" + userPassword + ", userEmail="
				+ userEmail + ", userMobileNumber=" + userMobileNumber + ", userAddress=" + userAddress
				+ ", userAdharcard=" + userAdharcard + ", userCity=" + userCity + ", userPincode=" + userPincode + "]";
	}
	public void setUserPincode(String userPincode) {
		this.userPincode = userPincode;
	}

	

}
