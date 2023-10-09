package com.eventsite.webdev.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventsite.webdev.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {

	Optional<User> findByEmail(String email);
	User findByUid(Long id);

    void deleteByUid(Long Uid);
}