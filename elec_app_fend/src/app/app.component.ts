import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'elec_app_fend';
  searchRequest:string='';

  constructor(){
    // localStorage.setItem('user','admin@gmail.com');
    // localStorage.setItem('password','admin1234');
    

  }

  // search()
  // {
  //   this.organizationService.getOne(this.searchRequest)
  //   .subscribe({
  //     next: (ong)=>{
  //       this.router.navigate(['organization/update/'+this.searchRequest]);
  //     }
  //   });
  // }

  // logout()
  // {
  //   this.router.navigateByUrl('');
  // }
}
