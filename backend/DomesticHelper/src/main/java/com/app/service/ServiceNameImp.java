package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.ServiceName;
import com.app.Repository.ServiceNameRepository;
@Service
public class ServiceNameImp implements ServiceNameService{
@Autowired
	private ServiceNameRepository sRepo;
	@Override
	public List<ServiceName> allServices() {
		// TODO Auto-generated method stub
		return sRepo.findAll();
	}

	@Override
	public void addServices(ServiceName name) {
		// TODO Auto-generated method stub
		ServiceName s=new ServiceName();
		s.setServiceNameId(name.getServiceNameId());
		s.setService(name.getService());
		sRepo.save(s);
		
	}

	@Override
	public void deleteService(int id) {
		// TODO Auto-generated method stub
		sRepo.deleteById(id);
		
	}

}
