package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.app.Entity.User;
import com.app.service.BookingInfoService;
import com.app.service.HelperService;

@RestController
@RequestMapping("/helper")

public class HelperController {
	@Autowired
	private HelperService helperservice;
	@Autowired
	private BookingInfoService bInfoService;
	
	
	@GetMapping("/bookingInfo")
	public List<BookingInfo> getAllBookingInfo(){
		
		return bInfoService.allBookingInfo();
	}
	@GetMapping("/bookingInfoHelper/{id}")
	public List<User> getAllBookedHelpers(@PathVariable int id) {

		return bInfoService.getUsertoSeeBooking(id);
	}
	
	
	@PostMapping("/insert")
	public Helper insertHelper(@RequestBody Helper h) {

		return helperservice.insertHelper(h);
	}

	@GetMapping("/list")
	public List<Helper> getAllHelpers() {
		return helperservice.getAllHelper();
	}

	@GetMapping("/available")
	public List<Helper> available() {

		return helperservice.available();
	}

	@GetMapping("/serviceName/{name}")
	public List<Helper> getHelperByServiceName(@PathVariable String name) {

		return helperservice.getHelperByServiceName(name);
	}

	@PutMapping("/updateHelper")
	public String updateHelperDetails(@RequestBody Helper h) {
		helperservice.updateHelperDetails(h);
		return "updated details" + h.getHelperName();
	}

	@DeleteMapping("/deletehelper/{id}")
	public String deleted(@PathVariable int id) {
		helperservice.deleteHelper(id);
		return "deleted";
	}
	@PostMapping("/login")
	public boolean login(@RequestBody Helper h) {
		System.out.print(h.getHelperEmail()+""+ h.getHelperPassword());
		return helperservice.login(h.getHelperEmail(), h.getHelperPassword());
	}
}
