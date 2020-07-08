import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from './../_service/userservice.service';
import { Userinfomodel } from './../_models/userinfomodel';

@Component({
  selector: 'app-adminupdateuser',
  templateUrl: './adminupdateuser.component.html',
  styleUrls: ['./adminupdateuser.component.css']
})
export class AdminupdateuserComponent implements OnInit {

  @Input() childupdatecomponentuserobj : Userinfomodel;

 public isUpdateConfirmationMsgVisible = false;
 public isUpdateFormVisible = true;

 countrylist = ['India', 'Chaina', 'Japan', 'Srilanka'];

  constructor(private userservice: UserserviceService)
  {
      console.log("constructor");
  }

  ngOnInit() {
    console.log("nginit");
    this.userservice.singleuserobject = this.childupdatecomponentuserobj;
  }

  resetForm(form?: NgForm) 
  {
    if (form)
      form.reset();
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
     console.log("inside onsubmit");
   
      // If id empty then it will insert else update
     if (form.value.email == "") 
     {

     }
     else
     {
         this.userservice.updateUserUsingPut(form.value).subscribe( (res) => { 
                         this.resetForm(form);
                         this.isUpdateConfirmationMsgVisible = true;
                         this.isUpdateFormVisible = false;
         });
     }
     
    }

}
