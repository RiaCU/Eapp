import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Organization } from '../Models/organization.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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
		this.router.navigate(['organization/search']);
		}
	});
  }

  close(){
	this.router.navigate(['organization/search']);
  }

  Countries: Array<any> = [
	{ name: 'Germany', states:['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']},
	{ name: 'USA', states: ['California','Florida','Georgia','New Jersey','New Mexico','New York','Downers Grove']},
	{ name: 'Mexico', states: ['Puebla','Chihuahua','Sonora','Coahuila','Durango','Oaxaca','Tamaulipas','Jalisco','Zacatecas']},
	{ name: 'India', states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','West Bangal']}
]

  states: Array<any> = [];


changeCountry(country: any) { 
	this.states = this.Countries.find((cntry: any) => cntry.name == country.target.value).states;
}


}
