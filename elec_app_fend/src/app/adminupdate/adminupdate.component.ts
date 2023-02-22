import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from '../Models/organization.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent implements OnInit {

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
      programtobeAccreditted :'',
    	status : '' 
    }
    f=true;
  constructor(private route: ActivatedRoute,private organizationService : OrganizationService,private router: Router) {
    this.organizationService.show();
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id = params.get('id');
        
        if(id)
        {
          this.organizationService.getOne(id)
          .subscribe({
            next: (ong)=>{
              this.updateOngRequest = ong;
              //console.log(ong.status);
              
              if(ong.status=='Submited')
              this.f=false;
            }
          });
        }
      }
    });
  }
  updateDetails()
  {
	this.organizationService.update(this.updateOngRequest.id,this.updateOngRequest)
	.subscribe({
		next:(response)=>{
			alert("Successfully updated");
		this.router.navigate(['approvereject']);
		}
	});
  }

  close(){
    this.router.navigate(['approvereject']);
    }

}
function id(id: any, updateOngRequest: Organization) {
  throw new Error('Function not implemented.');
}

