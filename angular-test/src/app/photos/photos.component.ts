import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  pics:any;
  constructor(private photos: PhotosService) { }

  ngOnInit() {
    this.getPics();
  }
  getPics(){
    this.photos.retrievePhotos();
    this.photos.retrievePhotos().subscribe(res=>{
      this.pics = res
      console.log(this.pics)
    })
  }
}
