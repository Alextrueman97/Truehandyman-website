package com.thm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thm.models.Email;

@Repository
public interface EmailRepository extends JpaRepository<Email, Long> {

}
