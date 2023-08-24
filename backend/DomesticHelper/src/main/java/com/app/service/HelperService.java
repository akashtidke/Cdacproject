package com.app.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.app.Entity.Helper;

@Component
public interface HelperService {
	
	public Helper insertHelper(Helper h); 
	public List<Helper>getAllHelper();
	
	 List<Helper>available();
	 
	public List<Helper>getHelperByServiceName(String name);
	
	public void updateHelperDetails(Helper h);
	public void deleteHelper(int id);
	public boolean login(String email,String password);

}
