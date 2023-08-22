package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.User;
import com.app.Repository.UserRepository;
@Service
public class UserServiceImp implements UserService {
	@Autowired
	private UserRepository uRepo;

	@Override
	public List<User> getAllUsers() {
		List<User>u=uRepo.findAll();
				return u;
	}

	@Override
	public String addUser(User u) {
		User u1=new User();
		u1.setUserId(u.getUserId());
		u1.setUserName(u.getUserName());
		u1.setUserPassword(u.getUserPassword());
		u1.setUserEmail(u.getUserEmail());
		u1.setUserMobileNumber(u.getUserMobileNumber());
		u1.setUserAddress(u.getUserAddress());
		u1.setUserAdharcard(u.getUserAdharcard());
		u1.setUserCity(u.getUserCity());
		u1.setUserPincode(u.getUserPincode());
		uRepo.save(u1);
		
		return null;
	}

	@Override
	public User findUser(int id) {
		// TODO Auto-generated method stub
		User u=uRepo.findById(id).get();
		
		return u;
	}

	
	

	@Override
	public User updateUserById(User u, int id) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserId(u.getUserId());
		u1.setUserName(u.getUserName());
		u1.setUserPassword(u.getUserPassword());
		u1.setUserEmail(u.getUserEmail());
		u1.setUserMobileNumber(u.getUserMobileNumber());
		u1.setUserAddress(u.getUserAddress());
		u1.setUserAdharcard(u.getUserAdharcard());
		u1.setUserCity(u.getUserCity());
		u1.setUserPincode(u.getUserPincode());
		uRepo.save(u1);
		return u1;
	}

	@Override
	public void updateUserName(int id,String name) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserName(name);
		uRepo.save(u1);
		
	}

	@Override
	public void updateEmail(int id,String email) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserEmail(email);
		uRepo.save(u1);
		
	}

	@Override
	public void updateMobileNumber(int id,String number) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserMobileNumber(number);
		uRepo.save(u1);
		
	}

	@Override
	public void updateAddress(int id,String Address) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserAddress(Address);
		uRepo.save(u1);
		
	}

	@Override
	public void updateCity(int id,String city) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserCity(city);
		uRepo.save(u1);
		
	}

	@Override
	public void updatePincode(int id,String pincode) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserPincode(pincode);
		uRepo.save(u1);
		
	}

	@Override
	public void UpdatePassword(int id,String password) {
		// TODO Auto-generated method stub
		User u1=uRepo.findById(id).get();
		u1.setUserPassword(password);
		uRepo.save(u1);
		
	}

	@Override
	public void deleteUserById(int  id) {
		// TODO Auto-generated method stub
		uRepo.deleteById(id);
		
		
	}
	

}
