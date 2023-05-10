package com.thm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thm.models.Email;
import com.thm.repository.EmailRepository;

@Service
public class EmailService {

	@Autowired
	private EmailRepository emailRepository;
	
	public Email save(Email email) {
		return emailRepository.save(email);
	}
}
