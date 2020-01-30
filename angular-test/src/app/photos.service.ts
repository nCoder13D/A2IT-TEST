import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private api: ApiService) {
    
  }
  
  retrievePhotos(){
    return this.api.get("photos?albumId=1")
  }
}
