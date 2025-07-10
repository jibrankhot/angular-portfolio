import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  @Input() index: number = 0;
  @Input() aosDelay: number = 0;

  galleriaImages: any[] = [];

  ngOnInit(): void {
    this.galleriaImages = this.project.images.map((img: string) => ({
      previewImageSrc: img,
      thumbnailImageSrc: img,
      alt: this.project.title,
      title: this.project.title
    }));
  }
}
