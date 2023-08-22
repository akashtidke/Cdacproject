package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository; 

import com.app.Entity.BookingInfo;
import com.app.Entity.Helper;
import com.app.Entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
@EnableJpaRepositories
public interface BookingInfoRepository extends JpaRepository<BookingInfo, Integer>{


	 @Query("SELECT b.helper.helperId FROM BookingInfo b WHERE b.user.userId = :id")
public List<Integer>getHelperForUserWhoBooked(int id);
	 @Query("SELECT b.user.userId  FROM BookingInfo b WHERE b.helper.helperId = :id")
	 public List<Integer>getUsertoSeeBooking(int id);
}
