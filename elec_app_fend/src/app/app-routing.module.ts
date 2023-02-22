import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { ApproveRejectComponent } from './approve-reject/approve-reject.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { SearchComponent } from './search/search.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrganizationGuard } from './services/organization.guard';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent 
  },
  {
    path:'login',
    component:LoginComponent 
  },
  {
    path:'userReg',
    component:UserRegisterComponent 
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[OrganizationGuard] 
  },
  {
    path:'organization/search',
    component:SearchComponent,
    canActivate:[OrganizationGuard] 
  },
  {
    path:'organization/update/:id',
    component:UpdateComponent,
    canActivate:[OrganizationGuard] 
  },
  {
    path:'approvereject',
    component:ApproveRejectComponent,
    canActivate:[OrganizationGuard] 
  },
  {
    path:'adminupdate/:id',
    component:AdminupdateComponent,
    canActivate:[OrganizationGuard] 
  },
  {
    path:'navbar',
    component:NavbarComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FlexLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
