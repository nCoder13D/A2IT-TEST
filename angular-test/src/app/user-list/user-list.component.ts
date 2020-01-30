import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

userlist:any=[]
  constructor(private users: UsersService) { }

  ngOnInit() {
    this.getUserlist()
  }
  getUserlist(){
    this.users.getUsers().subscribe(res=>{
      this.userlist = res
    })
  }
}
