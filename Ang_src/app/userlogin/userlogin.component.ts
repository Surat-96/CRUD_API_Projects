import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../_service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit 
{

  public email : string ='';
  public password : string ='';
  public iserrormsgvisible = false;

  constructor(private userservice : UserserviceService, private router : Router) { }

  ngOnInit() { }

  onSubmit() 
  {
    console.log("INSIDE ONSUBMIT ANGULAR " + this.email);
    console.log("INSIDE ONSUBMIT ANGULAR " + this.password);
    
    this.userservice.userlogincheck(this.email, this.password)
                         .subscribe( (res : any) => 
                          {
                              if(res.errorMessage != null)
                              {
                                console.log("Problem");
                                this.iserrormsgvisible = true;
                                this.email = '';
                                this.password = '';
                              }
                              else
                              {
                                 console.log("BACK ANGULAR User is logged in " + res.token);
                                 //ADD TOKEN IN LOCAL STORAGE
                                 localStorage.setItem('auth_token', res.token);
                               
                                 this.router.navigate(['userafterlogin']);
                              }
                          }
                                  );
  }
}
