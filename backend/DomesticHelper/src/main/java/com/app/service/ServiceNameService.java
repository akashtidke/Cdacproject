package com.app.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.app.Entity.ServiceName;

@Component
public interface ServiceNameService {
	public List<ServiceName>allServices();
	public void addServices(ServiceName name) ;
	public void deleteService(int id);
	

}
