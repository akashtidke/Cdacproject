package com.app.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.BookingInfo;
import com.app.Entity.Helper;
import com.app.Entity.Review;
import com.app.Entity.User;
import com.app.service.BookingInfoService;
import com.app.service.ReviewService;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userservice;
	@Autowired
	private BookingInfoService bookInfoService;
	@Autowired
	private ReviewService rService;

	@GetMapping("/review")
	public List<Review> allReviews() {

		return rService.getAllReviews();
	}

	@GetMapping("/bookingInfo")
	public List<BookingInfo> allBooking() {
		return bookInfoService.allBookingInfo();
	}

	@GetMapping("/bookingInfoUser/{id}")
	public List<Helper> allBookingByIdUser(@PathVariable int id) {
		
		return bookInfoService.getHelperForUserWhoBooked(id);
	}

	@GetMapping("/list")
	public List<User> getAllUsers() {
		List<User> u = userservice.getAllUsers();
		return u;
	}

	@PostMapping("/insert")
	public String insertUser(@RequestBody User u) {

		userservice.addUser(u);
		return "Account Created Succesfully";
	}

	@GetMapping("/userfind/{id}")
	public User findhelper(@PathVariable int id) {
		User u = userservice.findUser(id);
		return u;

	}

	@PutMapping("/userupdate/{id}")
	public User updateUser(@RequestBody User u, @PathVariable int id) {

		return userservice.updateUserById(u, id);

	}

	@PutMapping("/userupdate/{id}/{name}")
	public String updateUserName(@PathVariable int id, @PathVariable String name) {
		userservice.updateUserName(id, name);
		return "Name updated Successfully";

	}

	@PutMapping("/userupdate/{id}/{email}")
	public String updateUserEmail(@PathVariable int id, String email) {
		userservice.updateEmail(id, email);
		return "Email updated";
	}

	@PutMapping("/userupdate/{id}/{mobileNumber}")
	public String updateUserMobileNumber(@PathVariable String mobileNumber, @PathVariable int id) {
		userservice.updateMobileNumber(id, mobileNumber);
		return "Mobile number updated";
	}

	@PutMapping("/userupdate/{id}/{address}")
	public String updateUserAddress(@PathVariable int id, @PathVariable String address) {
		userservice.updateAddress(id, address);
		return "Address Updated";
	}

	@PutMapping("/userupdate/{id}/{city}")
	public String updateUserCity(@PathVariable int id, @PathVariable String city) {
		userservice.updateCity(id, city);
		return "City Updated";
	}

	@PutMapping("/userupdate/{id}/{pincode}")
	public String updateUserPincode(@PathVariable int id, @PathVariable String pincode) {
		userservice.updatePincode(id, pincode);
		return "pincode Updated";
	}

	@PutMapping("/userupdate/{id}/{password}")
	public String updateUserPassword(@PathVariable int id, @PathVariable String password) {
		userservice.UpdatePassword(id, password);
		return "password Updated";
	}

	@DeleteMapping("/userdelete/{id}")

	public String updateUserCity(@PathVariable int id) {
		userservice.deleteUserById(id);
		return "your account deleted";
	}
@PostMapping("/login")
	public boolean login(@RequestBody User u) {
		
		return userservice.login(u.getUserEmail(),u.getUserPassword());
	}

}
