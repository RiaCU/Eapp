import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Organization } from '../Models/organization.model';
import{User} from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  isLoggedIn()
  {
    return !!localStorage.getItem('token');
  }
  userReg(user: User):Observable<User>{    
    return this.http.post<User>(this.baseApiUrl + '/api/User',user);
  }
  login(user:User):Observable<User>{
    return this.http.post<User>(this.baseApiUrl+'/api/User/login',user);
  }

  getAllOrganization(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.baseApiUrl + '/api/HCO');
  }

  addOng(addOngRequest : Organization) : Observable<Organization>
  {
    return this.http.post<Organization>(this.baseApiUrl + '/api/HCO', addOngRequest);
  }

  getOne(id : string): Observable<Organization>
  {
    return this.http.get<Organization>(this.baseApiUrl + '/api/HCO/' + id);
  }

  update(id:string,updateOngRequest : Organization) : Observable<Organization>
  {
    return this.http.put<Organization>(this.baseApiUrl + '/api/HCO/'+id,updateOngRequest);
  }
  updateAdmin(id : string,status : string) : Observable<Organization>
  {
    return this.http.put<Organization>(this.baseApiUrl + '/api/HCO/'+ id,status);
  }
  flag: boolean=false;
  show()
  {
    this.flag=true;
  }
  hide()
  {
    this.flag=false;
  }
}
