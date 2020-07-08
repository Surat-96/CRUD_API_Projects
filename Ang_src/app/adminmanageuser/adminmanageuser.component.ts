import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './../_service/userservice.service';
import { Userinfomodel } from './../_models/userinfomodel';

@Component({
  selector: 'app-adminmanageuser',
  templateUrl: './adminmanageuser.component.html',
  styleUrls: ['./adminmanageuser.component.css']
})

export class AdminmanageuserComponent implements OnInit 
{
  public role = '';

  constructor(private router: Router,private userservice: UserserviceService) 
  {
    if(localStorage.getItem('role') === null)
       this.router.navigate(['adminlogin']);
       
    this.role = localStorage.getItem('role');
   }

  ngOnInit() {
    this.displayAllUser();
  }

  displayAllUser() 
  {
    this.userservice.getAllUserDetailsUsingGet().subscribe((res) =>
               { this.userservice.alluserdetails = res as Userinfomodel[]; });
  }

  deleteUser(email : string) 
  {
    console.log("Inside delete USER method "+ email);
    
    if (confirm('Are you sure to delete this record ?') == true) 
    {
        this.userservice.deleteOneUserUsingDelete(email).subscribe((res) => 
                                         { this.displayAllUser(); });
    }
  }  

}
