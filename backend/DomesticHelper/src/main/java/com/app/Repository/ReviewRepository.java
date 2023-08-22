package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

}
