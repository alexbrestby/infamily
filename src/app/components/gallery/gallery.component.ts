import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent {
  images: { url: string; alt: string; }[] = [
    { url: '/assets/img/cierkiew.jpg', alt: 'Image 1' },
    { url: '/assets/img/gimnazjum.jpg', alt: 'Image 2' },
    { url: '/assets/img/twierdza_1.jpg', alt: 'Image 3' }
    // Add more image objects here
  ];
}
