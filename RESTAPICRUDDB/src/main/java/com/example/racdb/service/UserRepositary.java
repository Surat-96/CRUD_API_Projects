package com.example.racdb.service;


import org.springframework.data.repository.CrudRepository;

import com.example.racdb.model.UserInfo;

public interface UserRepositary extends CrudRepository<UserInfo, String>
{}

