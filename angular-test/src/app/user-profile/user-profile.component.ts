import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;
  constructor(private users: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(){
    this.route.params.subscribe(params=>{
      this.user = this.users.getUser(params['id']).subscribe(res=>{
        this.user = res;
        console.log(this.user)
      })
    })
  }
}
