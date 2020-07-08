import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmanageaccounts',
  templateUrl: './adminmanageaccounts.component.html',
  styleUrls: ['./adminmanageaccounts.component.css']
})

export class AdminmanageaccountsComponent implements OnInit 
{

  constructor(private router: Router)
  {
    if(localStorage.getItem('role') === null)
       this.router.navigate(['adminlogin']);
  }

  ngOnInit() {
  }

}
