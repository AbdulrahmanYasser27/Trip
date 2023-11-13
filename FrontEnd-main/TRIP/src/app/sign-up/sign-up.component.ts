import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  admin :Admin= new Admin();
 

  constructor(private adminService:AdminServiceService, private router :Router) { }

  ngOnInit(): void {
  }

 saveAdmin(){
    this.adminService.signUp(this.admin).subscribe(data =>{
      console.log(data);
      this.goToAdminList();
    },
    error => console.log(error));
  }
  
  goToAdminList(){
    this.router.navigate(['/getAdmins']);
  }

  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();
  }

}
