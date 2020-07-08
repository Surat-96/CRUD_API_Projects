import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegValidationComponent } from './user-reg-validation/user-reg-validation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminmanageuserComponent } from './adminmanageuser/adminmanageuser.component';
import { AdminmanageaccountsComponent } from './adminmanageaccounts/adminmanageaccounts.component';
import { AdminafterloginComponent } from './adminafterlogin/adminafterlogin.component';
import { AdminsearchuserComponent } from './adminsearchuser/adminsearchuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserafterloginComponent } from './userafterlogin/userafterlogin.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
   },
   {
    path: 'home',
    component: HomeComponent
   },
   { path: 'register', 
     component: UserRegValidationComponent 
   },
   { path: 'adminlogin', 
     component: LoginComponent 
   },
   { path: 'adminmanageuser', 
     component: AdminmanageuserComponent 
   },
   { path: 'adminmanageaccounts', 
     component: AdminmanageaccountsComponent 
   },
   { path: 'adminafterlogin', 
     component: AdminafterloginComponent 
   },
   { path: 'adminsearchuser', 
     component: AdminsearchuserComponent 
   },
   { path: 'userlogin', 
     component: UserloginComponent 
   },
   { path: 'userafterlogin', 
     component: UserafterloginComponent 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
