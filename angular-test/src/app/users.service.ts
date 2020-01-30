import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Publicly accessable store of the users
public users = [];

  constructor(private api: ApiService) {
   }

  // Get all users
  getUsers(){
    return this.api.get('users')
  }
  // Get Single User Record
  getUser(userID: string){
    return this.api.get('users/' + userID);
  }
}
