import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  imgCollectionDesktop: Array<object> = [
    {
      image: '../../assets/images/image-product-1.jpg',
      thumbImage: '../../assets/images/image-product-1-thumbnail.jpg',
    }, {
      image: '../../assets/images/image-product-2.jpg',
      thumbImage: '../../assets/images/image-product-2-thumbnail.jpg',
    }, {
      image: '../../assets/images/image-product-3.jpg',
      thumbImage: '../../assets/images/image-product-3-thumbnail.jpg',
    }, {
      image: '../../assets/images/image-product-4.jpg',
      thumbImage: '../../assets/images/image-product-4-thumbnail.jpg',
    }
  ];


  imgCollectionMobile: Array<object> = [
    {
      image: '../../assets/images/image-product-1.jpg',
      thumbImage: '../../assets/images/image-product-1.jpg',
    }, {
      image: '../../assets/images/image-product-2.jpg',
      thumbImage: '../../assets/images/image-product-2.jpg',
    }, {
      image: '../../assets/images/image-product-3.jpg',
      thumbImage: './../assets/images/image-product-3.jpg',
    }, {
      image: '../../assets/images/image-product-4.jpg',
      thumbImage: '../../assets/images/image-product-4.jpg',
    }
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
