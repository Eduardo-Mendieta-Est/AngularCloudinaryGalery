import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagenService } from '../services/imagen.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Imagen } from '../models/imagen';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  /* ngx-swiper para crear una galeria de imagenes se puede instalar desde:  https://www.npmjs.com/package/ngx-swiper-wrapper*/

  @Input() index;

  imagenes: Imagen[] = [];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(private activeModal: NgbActiveModal, private imgService: ImagenService) { }

  ngOnInit(): void {
    this.config.initialSlide = this.index;
    this.imgService.list().subscribe(
      data => {
        this.imagenes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  modalDismiss(): void {
    this.activeModal.dismiss();
  }

}
