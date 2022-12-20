import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  admin:Admin =new Admin();
  id=this.route.snapshot.params['id'];
  

  constructor(private adminService: AdminServiceService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    
  }
  onSubmit(){
    this.adminService.updateAdminById(
      this.id,
      this.admin
    ).subscribe(data =>{
      this.goToAdmin()
    })
  }
  goToAdmin(){
    this.router.navigate(['/getAdmins'])
  }

}
