package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.BookingInfo;

public interface BookingInfoRepository extends JpaRepository<BookingInfo, Integer>{

}
