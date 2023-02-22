import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Organization } from '../Models/organization.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	addOngRequest : Organization = {
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

	registerForm = new FormGroup({
		ongName : new FormControl("",[Validators.required, Validators.pattern("[A-Z]*||[a-z]*")]),
		add : new FormControl("",[Validators.required]),
		coun : new FormControl("",[Validators.required]),
		sta : new FormControl("",[Validators.required]),
		cty : new FormControl("",[Validators.required]),
		zcode : new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(6),Validators.maxLength(6)]),
		em : new FormControl("",[Validators.required,Validators.email]),
		web : new FormControl("",[Validators.required,Validators.pattern("www+\.+[a-z]+\.+com")]),
		pri : new FormControl("",[Validators.required]),
		primob : new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
		sec : new FormControl("",[Validators.required]),
		secmob : new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
		prog : new FormControl("",[Validators.required])
	});
	get OName(): FormControl{
		return this.registerForm.get("ongName") as FormControl;
	}
	get Address(): FormControl{
		return this.registerForm.get("add") as FormControl;
	}
	get Country(): FormControl{
		return this.registerForm.get("coun") as FormControl;
	}
	get State(): FormControl{
		return this.registerForm.get("sta") as FormControl;
	}
	get City(): FormControl{
		return this.registerForm.get("cty") as FormControl;
	}
	get ZipCode(): FormControl{
		return this.registerForm.get("zcode") as FormControl;
	}
	get Email(): FormControl{
		return this.registerForm.get("em") as FormControl;
	}
	get Website(): FormControl{
		return this.registerForm.get("web") as FormControl;
	}
	get PriContact(): FormControl{
		return this.registerForm.get("pri") as FormControl;
	}
	get PriContactMob(): FormControl{
		return this.registerForm.get("primob") as FormControl;
	}
	get SecContact(): FormControl{
		return this.registerForm.get("sec") as FormControl;
	}
	get SecContactMob(): FormControl{
		return this.registerForm.get("secmob") as FormControl;
	}
	get Programs(): FormControl{
		return this.registerForm.get("prog") as FormControl;
	}

  constructor(private formBuilder: FormBuilder,private organizationService : OrganizationService,private router: Router) { 
	this.organizationService.show();
  }
  addOng()
	{
		this.organizationService.addOng(this.addOngRequest)
		.subscribe({
			next: (ong)=>{
				this.router.navigate(['organization/update/'+ong.id]);
			}
		});
	}

  ngOnInit(): void {
  }

  //selectedCountry: String = "--Choose Country--";
  
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
