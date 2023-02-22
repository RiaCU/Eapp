import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  addUserReq : User = {
    id:'',
    email:'',
    password:'',
    role:''

  }
  constructor(private formBuilder: FormBuilder,private organizationService : OrganizationService,private router: Router) { 
    this.organizationService.hide();
  }

  ngOnInit(): void {
  }
userRegisterForm = new FormGroup({
  email : new FormControl("",[Validators.required,Validators.email]),
  pwd : new FormControl("",[Validators.required,Validators.maxLength(15),Validators.minLength(6)]),
  role : new FormControl("",[Validators.required])
});

get Email(): FormControl{
  return this.userRegisterForm.get("email") as FormControl;
}
get Password(): FormControl{
  return this.userRegisterForm.get("pwd") as FormControl;
}
get Role(): FormControl{
  return this.userRegisterForm.get("role") as FormControl;
}

registerSubmitted()
{
  alert("Successfully Registered");
  this.organizationService.userReg(this.addUserReq).
  subscribe({
    next: (user)=>{
      //console.log(user);
    //   if(user.role=='user'){
    //   this.router.navigate(['register']);
    // }
    // else if(user.role=='executive')
    // {
    //   this.router.navigate(['approvereject']);
    // }
    this.router.navigate(['login']);
    }
  });
}
}
