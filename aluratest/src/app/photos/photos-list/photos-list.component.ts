import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  
  photos: Photo[] = [];
  filter: string = ' ';
  debounce: Subject<string> = new Subject<string>();
  
  constructor(private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
  this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
