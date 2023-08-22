package com.app.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.app.Entity.User;
@Component
public interface UserService {

	public List<User>getAllUsers();
	public String addUser(User u);
	public User findUser(int id);
	
	public User updateUserById(User u,int id);
	
	public void updateUserName(int id,String name);
	public void updateEmail(int id,String email);
	public void updateMobileNumber(int id,String number);
	public void updateAddress(int id,String Address);
	public void updateCity(int id,String city);
	public void updatePincode(int id,String pincode);
	public void UpdatePassword(int id,String password);
	public void deleteUserById(int id);
	public boolean login(String email,String password);
	
}
