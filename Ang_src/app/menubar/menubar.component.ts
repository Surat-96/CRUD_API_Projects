import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  constructor(private router: Router) { }

  public islogIn(): boolean 
  {
    return (localStorage.getItem('role') !== null);
  }

  logout() 
  {
    
   // localStorage.removeItem('role');
   window.localStorage.removeItem('role');
   localStorage.clear();
    console.log('Inside Logout Function');
    //sessionStorage.removeItem('auth_token');
    //sessionStorage.clear();

    this.router.navigate(['home']);
  }
}
