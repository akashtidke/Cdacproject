package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.BookingInfo;
import com.app.Entity.Helper;
import com.app.Entity.User;
import com.app.Repository.BookingInfoRepository;
@Service
public class BookingInfoImp  implements BookingInfoService{
@Autowired
BookingInfoRepository bInfoRepo;
	@Override
	public List<BookingInfo> allBookingInfo() {
		// TODO Auto-generated method stub
		return bInfoRepo.findAll() ;
	}
	@Override
	public List<User> BookingInfoByIdUser(int id) {
		// TODO Auto-generated method stub
		List<BookingInfo>bi=allBookingInfo();
		
		List<User>biu=new ArrayList<User>();
		
		for(int i=0;i<bi.size();i++) {
			BookingInfo firstBook=bi.get(i);
			User uId=firstBook.getUser();
			biu.add(uId);
			
		}
		
		return biu;
	
	}
	@Override
	public List<Helper> BookingInfoByIdHelper(int id) {
		// TODO Auto-generated method stub
		List<BookingInfo>bi=allBookingInfo();
		List<Helper>bhi=new ArrayList<Helper>();
		for(int i=0;i<bi.size();i++) {
			bhi.add(bi.get(i).getHelper());
		}
		return bhi;
	}

	

}
