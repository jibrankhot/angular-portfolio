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
  activeIndex: number = 0;
  displayFullImage: boolean = false;
  currentFullImageSrc: string = '';
  zoomed: boolean = false;

  touchStartX = 0;

  ngOnInit(): void {
    this.galleriaImages = this.project.images.map((img: string) => ({
      previewImageSrc: img,
      thumbnailImageSrc: img,
      alt: this.project.title,
      title: this.project.title
    }));
  }

  prevImage() {
    this.activeIndex = (this.activeIndex - 1 + this.galleriaImages.length) % this.galleriaImages.length;
    this.updateCurrentImage();
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.galleriaImages.length;
    this.updateCurrentImage();
  }

  openFullImage(src: string) {
    const index = this.galleriaImages.findIndex(img => img.previewImageSrc === src);
    if (index !== -1) {
      this.activeIndex = index;
      this.currentFullImageSrc = src;
      this.displayFullImage = true;
      this.zoomed = false;

      setTimeout(() => {
        const wrapper = document.querySelector('.dialog-wrapper') as HTMLElement;
        wrapper?.focus();
      }, 50);
    }
  }

  toggleZoom() {
    this.zoomed = !this.zoomed;
  }

  updateCurrentImage() {
    const img = this.galleriaImages[this.activeIndex];
    if (img) {
      this.currentFullImageSrc = img.previewImageSrc;
    }
  }

  handleKeyboard(event: KeyboardEvent) {
    if (!this.displayFullImage) return;

    switch (event.key) {
      case 'ArrowRight':
        this.nextImage();
        event.preventDefault();
        break;
      case 'ArrowLeft':
        this.prevImage();
        event.preventDefault();
        break;
      case 'Escape':
        this.displayFullImage = false;
        event.preventDefault();
        break;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].screenX;
    const delta = this.touchStartX - endX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.nextImage() : this.prevImage();
    }
  }
}
