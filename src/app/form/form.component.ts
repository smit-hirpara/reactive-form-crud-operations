import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm  } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  loginform!:FormGroup;
  userModeObj : fildsname = new fildsname;
  userdata:any;
  unamePattern = "^[a-z]{2,10}$";
  addbutton = true;
  usersid:any;

  constructor(private frmbuilder:FormBuilder, private formservice:FormService, private router: Router, private activatedroute:ActivatedRoute) {}
  
  ngOnInit():void {
    this.loginform = this.frmbuilder.group({
      fName:['',Validators.compose([Validators.required, Validators.pattern(this.unamePattern)])],
      lName:['',Validators.compose([Validators.required, Validators.minLength(4)])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      mobile:['',Validators.compose([Validators.required, Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
    });
    this.getusers();
     
    this.usersid = this.activatedroute.snapshot.params['id']
    this.formservice.getcurrentdata(this.usersid).subscribe((res) => {

      this.loginform.patchValue(res);
    });
  }

  // update user() 
  updateuser() {
    this.formservice.updateuser(this.activatedroute.snapshot.params['id'], this.loginform.value).subscribe((res) => {
      console.log(res);
    });
    
    // navigate table component
    // this.router.navigate(['/tablecompo']);
  }



  // cencal form
  cancelfunction(loginform:any) {
    loginform.reset();

    // navigate table component
    this.router.navigate(['/tablecompo']);
  }

  // add user
  postuser() {
    this.userModeObj.fName = this.loginform.controls['fName'].value;
    this.userModeObj.lName = this.loginform.controls['lName'].value;
    this.userModeObj.email = this.loginform.controls['email'].value;
    this.userModeObj.mobile = this.loginform.controls['mobile'].value;

    this.formservice.adduser(this.userModeObj).subscribe(res => {
      console.warn(res);
      alert("user addes successfully");
      this.getusers();

      // navigate table component
      // this.router.navigate(['/tablecompo']);

    },
    err => {
      alert("somthing wont wrong, plese try again");
    })
  }

  // get user
  getusers() {
    this.formservice.getuser().subscribe(res => {
      this.userdata =res;
    })
  }

}



export class fildsname {
  id:any;
  fName:any;
  lName:any;
  email:any;
  mobile:any;
}