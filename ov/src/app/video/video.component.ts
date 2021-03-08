import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  courseName=null;
  selectedVideo:Video = null;
  videos: Video[] = [];
  constructor() { }

  ngOnInit(): void {
    this.courseName = 'Programozás2'
    this.videos[0] = {
      id: '000',
      title: "Witcher",
      comments: [],
      url: "../../assets/1.mp4",
      authors: [],
      date: Date.now().toString(),
      isPublic: true,
      description: 'asdasd'
    }
    this.videos[1] = {
      id: '001',
      title: "Cyberpunk",
      comments: [],
      url: "../../assets/2.mp4",
      authors: [],
      date: Date.now().toString(),
      isPublic: true,
      description: 'asdasd'
    }

    this.selectedVideo = this.videos[0];
  }

  selectVideo(video:Video){
    this.selectedVideo = video;
  }

}

