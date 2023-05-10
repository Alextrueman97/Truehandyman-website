package com.thm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.mail.SimpleMailMessage;

import com.thm.models.Email;
import com.thm.services.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

	 @Autowired
	 private JavaMailSender emailSender;
	 @Autowired
	 private EmailService emailService;
	    
	    @PostMapping("/send-email")
	    public String sendEmail(@RequestBody Email email) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setFrom(email.getEmail());
	        message.setTo("truehandymantest@gmail.com");
	        message.setSubject("Job Request");
	        message.setText("Name: " + email.getFirstName() + email.getLastName() + "\nEmail: " + email.getEmail() + "\nMessage: " + email.getMessage());
	        emailSender.send(message);
	        
	        Email emailEntity = new Email(email.getFirstName(), email.getLastName(), email.getEmail(), email.getMessage());
	        emailService.save(emailEntity);
	        
	        return "Email sent";
	    }

}
