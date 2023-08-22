package com.app.Entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="servicenames")
public class ServiceName {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serviceNameId;
private String service;

@ManyToOne(fetch = FetchType.EAGER)
@JoinColumn(name = "helperId")
private Helper helper;
public ServiceName() {
	super();
	// TODO Auto-generated constructor stub
}
public ServiceName(int serviceNameId, String service) {
	super();
	this.serviceNameId = serviceNameId;
	this.service = service;
}
public int getServiceNameId() {
	return serviceNameId;
}
public void setServiceNameId(int serviceNameId) {
	this.serviceNameId = serviceNameId;
}
public String getService() {
	return service;
}
public void setService(String service) {
	this.service = service;
}
@Override
public String toString() {
	return "ServiceName [serviceNameId=" + serviceNameId + ", service=" + service + "]";
}


}
