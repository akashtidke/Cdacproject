package com.app.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.app.Entity.BookingInfo;
import com.app.Entity.Helper;
import com.app.Entity.User;

@Component
public interface BookingInfoService {

	public List<BookingInfo>allBookingInfo();
	public List<User>BookingInfoByIdUser(int id);
	public List<Helper>BookingInfoByIdHelper(int id);
	
}
