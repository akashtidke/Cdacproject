package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.Helper;
import com.app.Entity.User;
import com.app.Repository.HelperRepository;
@Service
public class HelperServiceImp implements HelperService {
	@Autowired
	private HelperRepository hRepo;
	@Override
	public Helper insertHelper(Helper h) {
		Helper h1=new Helper();
		h1.setHelperId(h.getHelperId());
		h1.setHelperName(h.getHelperName());
		h1.setHelperEmail(h.getHelperEmail());
		h1.setHelperPassword(h.getHelperPassword());
		h1.setHelperMobileNumber(h.getHelperMobileNumber());
		h1.setHelperAddress(h.getHelperAddress());
		h1.setHelperAdharcard(h.getHelperAddress());
		h1.setHelperCity(h.getHelperCity());
		h1.setHelperPincode(h.getHelperPincode());
		h1.setServicename(h.getServicename());
		h1.setAvalible(h.isAvalible());
		h1.setReviewList(h.getReviewList());
		hRepo.save(h1);
		return null;
	}

	@Override
	public List<Helper> getAllHelper() {
		
		return hRepo.findAll();
	}

	@Override
	public List<Helper> available() {
		List<Helper>h1=hRepo.findAll();
		List<Helper>h2=new ArrayList<Helper>();
		
		for(int i=0;i<h1.size();i++) {
			Helper temp=h1.get(i);
		if(temp.isAvalible()) {
		h2.add(temp);	
		}
		
		}
		return h2;
				
	}

	@Override
	public List<Helper> getHelperByServiceName(String name) {
		List<Helper>h1=hRepo.findAll();
		List<Helper>h2=new ArrayList<Helper>();
		
		for(int i=0;i<h1.size();i++) {
			Helper temp=h1.get(i);
			
		if(temp.getServicename().equals(name)) {
		h2.add(temp);	
		}
		
		}
		
		return h2;
		
	}

	@Override
	public void updateHelperDetails(Helper h) {
		// TODO Auto-generated method stub
		insertHelper(h);
		
	}

	@Override
	public void deleteHelper(int id) {
		// TODO Auto-generated method stub
		hRepo.deleteById(id);
		
	}

	

	@Override
	public boolean login(String email, String password) {
		// TODO Auto-generated method stub
		User u=   hRepo.login(email, password);	
        if(u==null) {
     	   return false;
        }
return true;
	}

}
