import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganizationService } from './organization.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationGuard implements CanActivate {
  constructor(private organizationService : OrganizationService,private router : Router){}
  canActivate(){
    if(this.organizationService.isLoggedIn())
    {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
  
}
