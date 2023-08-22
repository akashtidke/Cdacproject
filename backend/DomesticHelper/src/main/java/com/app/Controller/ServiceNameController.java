package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.ServiceName;
import com.app.service.ServiceNameService;
import com.app.service.UserService;

@RestController
@RequestMapping("/services")
public class ServiceNameController {
@Autowired
private ServiceNameService sNames;
	@GetMapping("/list")
	public List<ServiceName> allServicesNames(){
	
		return sNames.allServices();
	}
	@PostMapping("/serviceinsert")
	public String insert(@RequestBody ServiceName sname) {
		
		sNames.addServices(sname);
		return "updated";
	}
	
	
}
