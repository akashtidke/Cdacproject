package com.app.Repository;
import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.Entity.Helper;
import com.app.Entity.User;




@Repository
public interface HelperRepository extends JpaRepository<Helper,Integer>{
	
	@Query("SELECT u FROM Helper u WHERE u.helperEmail = :email AND u.helperPassword = :password")
	public User login(String email,String password);
	

}
