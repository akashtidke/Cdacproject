package com.app.Entity;

import javax.persistence.CascadeType;
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
@Table(name="review")
public class Review {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewId;

private int reating;
private String reviews;
//when selecting the root entity.
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "helperId")
private Helper helper;
	public Review() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Review(int reviewId, int reating, String reviews, Helper helper) {
		super();
		this.reviewId = reviewId;
		this.reating = reating;
		this.reviews = reviews;
		this.helper = helper;
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	public int getReating() {
		return reating;
	}
	public void setReating(int reating) {
		this.reating = reating;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public Helper getHelper() {
		return helper;
	}
	public void setHelper(Helper helper) {
		this.helper = helper;
	}
	
	
}
