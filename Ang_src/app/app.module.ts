import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegValidationComponent } from './user-reg-validation/user-reg-validation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AdminmanageuserComponent } from './adminmanageuser/adminmanageuser.component';
import { AdminmanageaccountsComponent } from './adminmanageaccounts/adminmanageaccounts.component';
import { AdminafterloginComponent } from './adminafterlogin/adminafterlogin.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsearchuserComponent } from './adminsearchuser/adminsearchuser.component';
import { AdminupdateuserComponent } from './adminupdateuser/adminupdateuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserafterloginComponent } from './userafterlogin/userafterlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegValidationComponent,
    LoginComponent,
    HomeComponent,
    MenubarComponent,
    AdminmanageuserComponent,
    AdminmanageaccountsComponent,
    AdminafterloginComponent,
    AdminsearchuserComponent,
    AdminupdateuserComponent,
    UserloginComponent,
    UserafterloginComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
