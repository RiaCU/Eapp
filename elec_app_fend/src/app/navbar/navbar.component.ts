import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public organizationService : OrganizationService,private router: Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.router.navigateByUrl('');
    localStorage.clear();
  }
}
