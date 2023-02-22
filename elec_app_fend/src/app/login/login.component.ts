import { getTokenAtPosition } from '@angular/compiler-cli/src/ngtsc/util/src/typescript';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj : any;
  
  constructor(private router: Router,private organizationService:OrganizationService) { 
    this.loginObj={
      Email:'',
      Password:''
    };
    this.organizationService.hide();
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    pwd : new FormControl("",[Validators.required]),
  });

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }

  login()
  {
    this.organizationService.login(this.loginObj)
    .subscribe({
      next: (u)=>{
        //console.log(u);
        
        if(u==null)
        {
          alert("Invalid User and password");
        }
				else
        {
          alert("Successfully logged in");
          localStorage.setItem('token',"Token");
          if(u.role=='user')
          this.router.navigateByUrl('organization/search');
          else
          this.router.navigateByUrl('approvereject');
          //this.organizationService.show();
      }
        // else
        // {
        //   alert("Successfully logged in");
        //   localStorage.setItem('token',"Token");
        //   this.router.navigateByUrl('approvereject');
        // }
			}
    })
    // if(this.loginObj.user == localStorage.getItem('user') && this.loginObj.password== localStorage.getItem('password'))
    // {
    //   this.router.navigateByUrl('approvereject')
    // }
    // else
    // {
    //   alert("Wrong Crendertials");
    // }
  }

}
