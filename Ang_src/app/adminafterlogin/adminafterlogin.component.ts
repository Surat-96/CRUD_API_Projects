import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminafterlogin',
  templateUrl: './adminafterlogin.component.html',
  styleUrls: ['./adminafterlogin.component.css']
})
export class AdminafterloginComponent implements OnInit 
{
  public role = '';

  constructor(private router: Router) 
  {
    if(localStorage.getItem('role') === null)
          this.router.navigate(['adminlogin']);
    
    this.role = localStorage.getItem('role');
  }

  ngOnInit() {
  }

}
