package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.Review;
import com.app.Repository.ReviewRepository;
@Service
public class ReviewServiceImp implements ReviewService{

	@Autowired
	private ReviewRepository rRepo;
	@Override
	public List<Review> getAllReviews() {
		// TODO Auto-generated method stub
		return rRepo.findAll();
	}
	

}
