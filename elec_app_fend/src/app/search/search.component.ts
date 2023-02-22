import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchRequest:string='';
  constructor(private organizationService : OrganizationService,private router: Router){
    this.organizationService.show();
  }

  search()
  {
    this.organizationService.getOne(this.searchRequest)
    .subscribe({
      next: (ong)=>{
        this.router.navigate(['organization/update/'+this.searchRequest]);
      }
    });
  }

  ngOnInit(): void {
  }

}
