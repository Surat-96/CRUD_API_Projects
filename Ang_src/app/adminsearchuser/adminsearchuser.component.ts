import { Component, OnInit } from '@angular/core';

import { UserserviceService } from './../_service/userservice.service';
import { Router } from '@angular/router';
import { Userinfomodel } from './../_models/userinfomodel';

@Component({
  selector: 'app-adminsearchuser',
  templateUrl: './adminsearchuser.component.html',
  styleUrls: ['./adminsearchuser.component.css']
})

export class AdminsearchuserComponent implements OnInit 
{
  public role = '';
  public email : string = "";
  public issearchformvisible = true;
  public issearchresultvisible = false;
  public isnorecordfoundvisible = false;
  public isupdatebuttonclicked = false;

  public parentsearchcomponentuserobj: Userinfomodel = null;

  constructor(private userservice: UserserviceService,private router: Router) 
  {
    if(localStorage.getItem('role') === null)
          this.router.navigate(['adminlogin']);
    
    this.role = localStorage.getItem('role');
   }

  ngOnInit() {
    this.initializeobject();
  }

  initializeobject()
  {
    this.userservice.singleuserobject = 
    {
      _id: "", // for string use ""
      fullname: "",
      email: "", 
      mobileno: "", 
      country: "",
      english: "",
      bengali:"",
      hindi:"",
      language: "",
      gender:"",
      dob: "",
      password: "",
      address: "",
      regdate: "",
      regtime: ""
    }
  }

  searchUser()
  {
    console.log("Inside Search User Method");
    this.userservice.searchUserUsingGet(this.email).subscribe((res) => 
           { 
             this.userservice.singleuserobject = res as Userinfomodel;
              console.log("RETURN BACK ");
             if( this.userservice.singleuserobject != null )
             {
                   this.isnorecordfoundvisible = false;
                   this.issearchresultvisible = true;
             }
             else
             {
                this.initializeobject();
                this.issearchresultvisible = false;
                this.isnorecordfoundvisible = true;
             }
                 
           });
  }

  displayUserDetails(userobj : Userinfomodel)
  {
      console.log("update pressed"+userobj.email);
      
      this.parentsearchcomponentuserobj = userobj;
      
      this.issearchformvisible = false;
      this.issearchresultvisible = false;
      this.isupdatebuttonclicked = true;
  }

}
