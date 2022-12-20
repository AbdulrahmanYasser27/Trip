import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message=""
  admin:Admin = new Admin()

  constructor(private adminSer:AdminServiceService, private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.adminSer.login(this.admin).subscribe(data =>{
      alert("login successfully")
      this.goToHome()
    }, error =>{
      alert("login failed")
      this.message="wrong creditials"
    })
  }

  goToHome(){
    this.route.navigate(['home'])
  }

}
