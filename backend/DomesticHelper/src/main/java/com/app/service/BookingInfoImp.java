package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.BookingInfo;
import com.app.Entity.Helper;
import com.app.Entity.User;
import com.app.Repository.BookingInfoRepository;
import com.app.Repository.HelperRepository;
import com.app.Repository.UserRepository;

@Service
public class BookingInfoImp implements BookingInfoService {
	@Autowired
	BookingInfoRepository bInfoRepo;
	@Autowired
	private UserRepository uRepo;
	@Autowired
	private HelperRepository hRepo;

	@Override
	public List<BookingInfo> allBookingInfo() {

		return bInfoRepo.findAll();
	}

	

	@Override
	public List<Helper> getHelperForUserWhoBooked(int id) {
		// return booked helper id by passing userId

		List<Integer> helperBooked = bInfoRepo.getHelperForUserWhoBooked(id);
		
		List<Helper>h=new ArrayList<>();
		for (int i = 0; i < helperBooked.size(); i++) {
			int idHelper = helperBooked.get(i);
			h.add(hRepo.findById(idHelper).get());
		}
		return h;
	}

	@Override
	public List<User> getUsertoSeeBooking(int id) {
		List<Integer> helperBooked = bInfoRepo.getUsertoSeeBooking(id);
		List<User> h = new ArrayList<User>();

		for (int i = 0; i < helperBooked.size(); i++) {
			int idUser = helperBooked.get(i);
			h.add(uRepo.findById(idUser).get());
		}
		System.out.print(h);
		return h;

	}



	@Override
	public void setBooking(BookingInfo b) {
		// TODO Auto-generated method stub
		BookingInfo b1=new BookingInfo();
		b1.setHelper(b.getHelper());
		b1.setUser(b.getUser());
		b1.setBookingId(b.getBookingId());
		b1.setBookingStartDate(b.getBookingStartDate());
		b1.setBookingEndDate(b.getBookingEndDate());
		bInfoRepo.save(b1);
		
	}



	

}
