import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins!:Admin[]

  constructor(private adminService: AdminServiceService , private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getadminList()
  }
  private getadminList(){
    this.adminService.getadminList().subscribe(data =>{
      this.admins=data;
    })

  }

  updateAdmin(id: number){
    this.router.navigate(['updateAdmin',id]);
  }
  
  deleteAdmin(id:number){
    this.adminService.deleteAdminById(id).subscribe(data => {
      this.getadminList()
    })
  }


}
