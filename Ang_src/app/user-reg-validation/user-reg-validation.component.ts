import { Component, OnInit } from '@angular/core';

//1. PROGRAMMER IMPORT
import { UserserviceService } from './../_service/userservice.service';
//4. IMPORT NgForm to USE IT IN RESETFORM FUNCTION
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-user-reg-validation',
  templateUrl: './user-reg-validation.component.html',
  styleUrls: ['./user-reg-validation.component.css']
})

export class UserRegValidationComponent implements OnInit 
{
// DROP DOWN LIST COUNTRY 
countrylist = ['India', 'Chaina', 'Japan', 'Srilanka'];
public isregsuccessmsgvisible = false;

//2. Dependency Injection..Object Creation
constructor(private userservice: UserserviceService){}

ngOnInit() 
{
  //WHEN PAGE WILL OPEN IT WILL BE RESET
  this.resetForm();
}

//3. IMPLEMENT RESET FORM OPERATION
//IF U are not passing parameter that's why we put ? after form
resetForm(form?: NgForm) 
{
if (form)
  form.reset();
  console.log("INSIDE RESET FORM FUNCTION");
  //MAKE ALL FIELD BLANK 
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

 onSubmit(form: NgForm) 
 {
   console.log("INSIDE ONSUBMIT METHOD");
   //FOR INSERT
    //Call postEmployee Method and subscribe as service
    this.userservice.addNewUserUsingPost(form.value)
                              .subscribe((res:any) => 
    {
        this.resetForm(form);
        console.log("RETURN BACK TO onsubmit Method");
            
       //FOR DISPLAY REG SUCCESS MSG
       this.isregsuccessmsgvisible = true;
       
    });
 
  /* console.log("INSIDE ONSUBMIT METHOD");
    console.log("YOUR NAME  " + this.singleuserobject.fullname);
    console.log("YOUR Email  " + this.singleuserobject.email);
    console.log("YOUR MOBILE  " + this.singleuserobject.mobileno);
    console.log("YOUR COUNTRY  " + this.singleuserobject.country);
    console.log("English  " + this.singleuserobject.english);
    console.log("Bengali  " + this.singleuserobject.bengali);
    console.log("Hindi  " + this.singleuserobject.hindi);
    console.log("YOUR GENDER  " + this.singleuserobject.gender);
    console.log("DOB  " + this.singleuserobject.dob);
    console.log("PASSWORD  " + this.singleuserobject.password);
    console.log("ADDRESS  " + this.singleuserobject.address);
    */
  }

}
