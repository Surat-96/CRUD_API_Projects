import { Component, OnInit } from '@angular/core';
//1.1 IMPORT ROUTER FOR REDIRECTING
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public adminloginid: string = "";
  public adminpassword: string = "";

  //CREATE VERIABLE FOR HIDE/VISIBLE ERROR MESSAGE
  // MAKE IT HIDE
  public iserrormsgvisible = false;

  //1.2 INJECT IT
  constructor(private router: Router) {} 

  ngOnInit() {}

  onSubmit() 
  {
    //console.log(this.adminloginid);

    var uidmatch = this.adminloginid.localeCompare("admin");  
    var passmatch = this.adminpassword.localeCompare("admin");  
  
    if ( ( uidmatch == 0 ) && (passmatch == 0) )
    {
       console.log(" WELCOME ADMIN : Match");

       // console.log("match");
       //1.3 REDIRECT TO AFTER LOGIN MODULE 
       this.router.navigate(['adminafterlogin']);
       
       // STORE VALUE IN SESSION
       localStorage.setItem('role','admin');
    }
    else
    {
      console.log(" INVALID UID OR PASSWORD");

      //DISPLAY ERROR MSG
      this.iserrormsgvisible = true;

      this.adminloginid = "";
      this.adminpassword = "";
    }
  }
}
