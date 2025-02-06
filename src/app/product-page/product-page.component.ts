import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { ProductServiceService } from '../product service/product-service.service';
import { RelatedProductsComponent } from '../related-products/related-products.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RelatedProductsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  service = inject(ProductServiceService);

  product: Product = this.service.getAllProducts()[29];
  imageUrl!: string;
  imageIndex: number = 0;
  productQuantity: number = 1;
  selectedColor!: string;
  selectedSize!: string;

  viewedProducts: Product[] = this.service.getAllProducts();

  productImages: string[] = [
    this.product.image?.image1 ? this.product.image.image1 : 'image',
    this.product.image?.image2 ? this.product.image.image2 : 'image',
    this.product.image?.image3 ? this.product.image.image3 : 'image',
    this.product.image?.image4 ? this.product.image.image4 : 'image',
  ];

  ngOnInit(): void {
    this.imageUrl = this.product.image?.image1
      ? this.product.image.image1
      : 'man1.png';

    this.viewedProducts = this.viewedProducts.slice(0, 4);
  }

  currentIndex: number = 0;

  get getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  imagePath(index: number) {
    this.currentIndex = index;
    this.imageIndex = index;
  }

  increase() {
    this.productQuantity = this.productQuantity + 1;

    console.log(this.productQuantity);
  }

  decrease() {
    if (this.productQuantity == 1) {
      return;
    } else {
      this.productQuantity = this.productQuantity - 1;
      console.log(this.productQuantity);
    }
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  stock() {
    if (this.product.quantity > 0) {
      return 'In Stock';
    } else {
      return 'Out of Stock';
    }
  }

  calculateDiscount() {
    if (this.product.discount) {
      const discount = this.product.discount;
      const price = this.product.price;

      let percent: number = (discount / price) * 100;

      const off: number = Math.floor(100 - percent);

      return off + '%';
    } else {
      return;
    }
  }

  get tag() {
    const tag = this.product.tag;

    if (tag == 'TRENDING') {
      return 'TRENDING PRODUCT';
    } else if (tag == 'NEW') {
      return 'NEW PRODUCT';
    } else if (tag == 'HOT') {
      return 'HOT PRODUCT';
    } else {
      return;
    }
  }

  get categories() {
    const category = this.product.category;

    let productCategory: string[];

    const allCategories: string[] = [
      'women',
      'bag',
      'skirt',
      'men',
      'shirt',
      'jacket',
      'hoodie',
      'shoe',
      'jeans',
      'dress',
      'sweatshirt',
      'pants',
    ];

    productCategory = allCategories.filter(
      (cat) => category[cat as keyof ProductCategory]
    );

    return productCategory;
  }
}
