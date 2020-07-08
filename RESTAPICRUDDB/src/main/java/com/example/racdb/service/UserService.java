package com.example.racdb.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.racdb.model.UserInfo;

//By default Service Class is Singleton and register it in spring framework
@Service
public class UserService
{
	@Autowired  //Injected In TopicService Class
	private UserRepositary userrepository;
	
	public UserInfo addUserInfo(UserInfo userobj) 
	{
		System.out.println("INSIDE addUserInfo METHOD in SERVICE CLASS");
		System.out.println("Name "+userobj.getFullname());
		System.out.println("Email  "+userobj.getEmail());
		System.out.println("MobileNO  "+userobj.getMobileno()+"\n");
				
		//save return the object which it saved
		userobj =userrepository.save(userobj);
		
		return userobj;
	}
	
	public List<UserInfo> getAllUserDetails()
	{
		System.out.println("INSIDE getAllUserDetails METHOD in SERVICE CLASS \n");
		
		List<UserInfo> alluserdetails = new ArrayList<UserInfo>();
		userrepository.findAll().forEach(alluserdetails::add);
		return alluserdetails;
	 }
	
	public UserInfo searchUser(String email)
	{
		System.out.println("INSIDE searchUser METHOD in SERVICE CLASS");
		System.out.println("Email is " + email +"\n");
		
      Optional<UserInfo> founduser = userrepository.findById(email);
		
		if(founduser.isPresent())
			return founduser.get();
		else
			return null;
	}
	
	public void updateUserDetails(String email, UserInfo userobj) 
	{
		System.out.println("INSIDE updateUserDetails METHOD in SERVICE CLASS");
		System.out.println("Email  "+ email);
		System.out.println("Name "+userobj.getFullname());
		System.out.println("Email  "+userobj.getEmail());
		System.out.println("MobileNO  "+userobj.getMobileno() + "\n");
		
		//IF ID EXIST UPDATE IT, IF NOT EXIST THEN INSERT IT
		userrepository.save(userobj);
	}
	
	public void deleteUser(String email) 
	{
		System.out.println("INSIDE deleteUser METHOD in SERVICE CLASS");
		System.out.println("Email  "+ email +"\n");
		
		userrepository.deleteById(email);
	}
}