import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    './gallery.component.sass'
  ]
})
export class GalleryComponent {

  public masonryOptions: NgxMasonryOptions = {
    itemSelector: '.masonry-item',
    columnWidth: 300,
    gutter: 10,
  };

  images: { url: string; alt: string; }[] = [
    { url: '/assets/img/3-maja_2.jpg', alt: 'ул.3-мая' },
    { url: '/assets/img/cierkiew.jpg', alt: 'церковь' },
    { url: '/assets/img/daughter.png', alt: 'девочка' },
    { url: '/assets/img/droga.jpg', alt: 'дорога' },
    { url: '/assets/img/dworzec_1.jpg', alt: 'вокзал' },
    { url: '/assets/img/gimnazjum.jpg', alt: 'гимназия' },
    { url: '/assets/img/kościół_1.jpg', alt: 'костел' },
    { url: '/assets/img/magistrat.jpg', alt: 'магистрат' },
    { url: '/assets/img/logo.png', alt: 'логотип' },
    { url: '/assets/img/nadbrzeżna.jpg', alt: 'набережная' },
    { url: '/assets/img/slider_1.jpg', alt: 'праздник в Высоком' },
    { url: '/assets/img/slider_3.jpg', alt: 'реестр' },
    { url: '/assets/img/szk_techniczna.jpg', alt: 'техникум' },
    { url: '/assets/img/twierdza_1.jpg', alt: 'крепость' },
    { url: '/assets/img/twierdza_kaplica.jpg', alt: 'крепость нижний храм' },
    { url: '/assets/img/wiadukt_1.jpg', alt: 'мост' },
    // Add more image objects here
  ];
}