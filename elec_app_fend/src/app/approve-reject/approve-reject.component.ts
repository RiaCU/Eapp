import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Organization } from '../Models/organization.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-approve-reject',
  templateUrl: './approve-reject.component.html',
  styleUrls: ['./approve-reject.component.css']
})
export class ApproveRejectComponent implements OnInit {
  organizations : Organization[]=[];
  updateOngRequest : Organization = {
		id : '',
		oName : '',
    	address : '',
    	country : '',
    	state : '',
    	city : '',
    	zipcode : 0,
    	email : '',
    	website : '',
    	priContact : '',
    	priContactmob : 0,
    	secContact : '',
    	secContactmob : 0,
      programtobeAccreditted:'',
    	status : '' 
    }
  constructor(private organizationService: OrganizationService,private router : Router) {
     this.organizationService.show();
   }

  ngOnInit(): void {
    this.organizationService.getAllOrganization()
    .subscribe({
      next:(organizations) => {
        this.organizations = organizations;
       // console.log(this.organizations);
        
      },
      error :(response) => {
        console.log(response);
      }
    });
  }

  // logout()
  // {
  //   //localStorage.clear();
  //   this.router.navigateByUrl('');
  // }
  
}
