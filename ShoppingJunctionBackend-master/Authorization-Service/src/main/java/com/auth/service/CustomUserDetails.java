package com.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.modal.User;
import com.auth.repository.UserRepository;


@Service
public class CustomUserDetails {
	
	
	
	@Autowired
	private UserRepository userRepository;
	
	public int getUserId(String name) {
		return this.userRepository.findByUsername(name).getId();
	}
	
	public User registerProfile(User user) {
		return userRepository.save(user);
	}

	

public User updateProfile(User user) {
	   
//	Integer id = user.getId();
//	User update = userRepository.findById(id).orElse(user);
//	update.setName(user.getUsername());
//	update.setPassword(user.getPassword());
//	update.setName(user.getName());
//	update.setMobile(user.getMobile());
	return userRepository.save(user);
		
		
	}
}
