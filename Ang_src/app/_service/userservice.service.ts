import { Injectable } from '@angular/core';

// REQUIRE TO SEND HTTP REQUEST TO NODEJS CONTROLLER
import { HttpClient } from '@angular/common/http';
import { Userinfomodel } from './../_models/userinfomodel';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService 
{
  // USED FOR INSERT UPDATE OPERATION USING FORM
  singleuserobject: Userinfomodel; 
// FETCH ALL USER FROM DataBase AND STORE IT HERE FOR DISPLAY TABULAR FORM IN ANGULAR
  alluserdetails: Userinfomodel[];  

  // CREATE READONLY VERIABLE FOR URI (Employee Controller in Our NODE JS PROJECT)
  readonly url = 'http://localhost:8082/users';

  //2. INJECT httpClient
  // open the root AppModule,
 // import the HttpClientModule from @angular/common/http,
 // add it to the @NgModule.imports array.
  constructor(public http: HttpClient) { }

  //COMMUNICATE WITH NODEJS EMPLOYEE CONTROLLER POST 
  //IT WILL SEND A HTTP POST REQUEST FOR THAT WE REQUIRE HttpClient
  addNewUserUsingPost(singleuserinfo: Userinfomodel) 
  {
    // USE http POST Method to Communicate with Server
    console.log("INSIDE addNewUserUsingPost SERVICE METHOD");
    return this.http.post(this.url, singleuserinfo);
  }

  //IT WILL SEND A HTTP REQUEST FOR FETCH ALL EMPLOYEE DOCUMENT
  getAllUserDetailsUsingGet() {
    return this.http.get(this.url);
  }

  deleteOneUserUsingDelete(email: string) {
    //console.log("Inside delete service "+ email);
    return this.http.delete(this.url + `/${email}`);
  }

  searchUserUsingGet(email: string) {
    console.log("Inside searchUserUsingGet method in service "+ email);
    return this.http.get(this.url + `/${email}`);
  }

  //IT WILL SEND A HTTP REQUEST FOR UPDATE FOR EMPLOYEE DOCUMENT
  updateUserUsingPut(updateduserinfo: Userinfomodel) 
  {
       return this.http.put(this.url+ `/${updateduserinfo.email}`, updateduserinfo);
  }

  userlogincheck(email:string, password:string ) 
  {
     // this is just the HTTP call, 
     return this.http.post(this.url+'/userlogincheck', {loginid :email,password: password});
  }
}
