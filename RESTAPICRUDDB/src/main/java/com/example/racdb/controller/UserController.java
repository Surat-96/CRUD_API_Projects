package com.example.racdb.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.racdb.model.UserInfo;
import com.example.racdb.service.UserService;

@RestController
public class UserController 
{
	@Autowired //USED FOR DEPENDENCY INJECTION
	private UserService userservice;
	
	@RequestMapping(method=RequestMethod.POST, value="/users")
	public UserInfo addUser(@RequestBody UserInfo userobj)
	{
		System.out.println("INSIDE addUser Method IN CONTROLLER CLASS");
		System.out.println("INFORMATION  "+userobj.getFullname());
		
		LocalDate dt = LocalDate.now();
		LocalTime lt = LocalTime.now();
		userobj.setRegdate(""+dt);
		userobj.setRegtime(""+lt);
		
		//RETURN INSERTED OBJECT
		userobj = userservice.addUserInfo(userobj);
		return userobj;
	}
	
	@RequestMapping("/users")
	public List<UserInfo> getAllUserDetails()
	{
		System.out.println("INSIDE getAllUserDetails Method IN CONTROLLER CLASS");
		
		return userservice.getAllUserDetails();
	}
	
	@RequestMapping("/users/{emailid}")
	public UserInfo searchUser(@PathVariable String emailid)
	{
		System.out.println("INSIDE searchUSER Method IN CONTROLLER CLASS");
		System.out.println("Email RECEIVED FROM URL IN CONTROLLER "+emailid);
		
		return userservice.searchUser(emailid);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/users/{emailid}")
	public void updateUserDetails(@RequestBody UserInfo userobj,@PathVariable String emailid)
	{
		System.out.println("INSIDE updateUserDetails Method IN CONTROLLER CLASS");
		System.out.println("Email RECEIVED FROM URL IN CONTROLLER "+emailid);
		System.out.println("UPDATED INFORMATION  "+userobj.getFullname());
		
		userservice.updateUserDetails(emailid,userobj);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/users/{emailid}")
	public void deleteUser(@PathVariable String emailid)
	{
		System.out.println("INSIDE deleteUser Method IN CONTROLLER CLASS");
		System.out.println("Email RECEIVED FROM URL IN CONTROLLER "+emailid);
		
		userservice.deleteUser(emailid);
	}
}
