import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { OrganizationService } from './organization.service';

describe('OrganizationService', () => {
  let service: OrganizationService;
  let http : HttpClientTestingModule;
  let httpController : HttpTestingController;
  let baseApiUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(OrganizationService);
    http=TestBed.inject(HttpClientTestingModule);
    httpController=TestBed.inject(HttpTestingController);
    baseApiUrl=environment.baseApiUrl;

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login method Successfully', () => {
    const data = true;
    const inputdata={
      id:'',
      email:'rs@gmail.com',
      password:'rs1234',
      role:''}
      service.login(inputdata).subscribe({
        next:(u)=>{        
          //expect(u.role).toBe('user');
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/User/login');
      expect(req.request.method).toEqual('POST');
      req.flush(data);
  });

  it('login method Failed', () => {
    const emsg='status 400 error';
    const inputdate={
      id:'',
      email:'r@gmail.com',
      password:'r1234',
    role:''}
      service.login(inputdate).subscribe({
        next:(u)=>{
          fail('400 status'),
          (error:HttpErrorResponse)=>
          expect(error.status).toEqual(400);
          expect(Error.name).toEqual(emsg);
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/User/login');
      expect(req.request.method).toEqual('POST');
      //req.flush(emsg, {status:400,statusText:'Server Error'});
  });

  it('userReg method Successfully', () => {
    const inputdata={
      id:'',
      email:'rs@gmail.com',
      password:'rs1234',
    role:'user'}
      service.userReg(inputdata).subscribe({
        next:(u)=>{
          expect(u.role).toBe('user');
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/User');
      expect(req.request.method).toEqual('POST');
      
  });

  it('getAllOrganization method Successfully', () => {
      service.getAllOrganization().subscribe({
        next:(u)=>{
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/HCO');
      expect(req.request.method).toEqual('GET');
  });

  it('getOne method Successfully', () => {
    const id = '1';
    service.getOne(id).subscribe({
      next:(u)=>{
      }
    });
    const req = httpController.expectOne(baseApiUrl+'/api/HCO/'+id);
    expect(req.request.method).toEqual('GET');
});

  it('addOne method Successfully', () => {
    const inputdata={
      id : '',
    oName : "WXCO",
    address : 'College Street',
    country : 'India',
    state : "West Bangal", 
    city : 'Kolkata',
    zipcode : 700009,
    email : 'wxco@gmail.com',
    website : 'www.wxco.com',
    priContact : 'A',
    priContactmob : 2321657896,
    secContact : 'B',
    secContactmob : 2321657896,
    programtobeAccreditted : "U",
    status : ''}
      service.addOng(inputdata).subscribe({
        next:(u)=>{
          expect(u.status).toBe('Submitted');
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/HCO');
      expect(req.request.method).toEqual('POST');
  });

  it('update method Successfully', () => {
    const inputdata={
      id : '',
    oName : "WXCO",
    address : 'College Street',
    country : 'India',
    state : "West Bangal", 
    city : 'Kolkata',
    zipcode : 700009,
    email : 'wxco@gmail.com',
    website : 'www.wxco.com',
    priContact : 'A',
    priContactmob : 2321657896,
    secContact : 'B',
    secContactmob : 2321657896,
    programtobeAccreditted : "U",
    status : ''};
    const id='1';
      service.update(id,inputdata).subscribe({
        next:(u)=>{
          //expect(u.status).toBe('Submitted');
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/HCO/'+id);
      expect(req.request.method).toEqual('PUT');
  });
  
  it('update method Successfully', () => {
    const status = 'Approved';
    const id='1';
      service.updateAdmin(id,status).subscribe({
        next:(u)=>{
          expect(u.status).toBe('Submitted');
        }
      });
      const req = httpController.expectOne(baseApiUrl+'/api/HCO/'+id);
      expect(req.request.method).toEqual('PUT');
  });
  
});
