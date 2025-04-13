import { Component, inject, OnInit, Input } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { ProductServiceService } from '../services/product-service.service';
import { RelatedProductsComponent } from '../related-products/related-products.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartProduct } from '../models/product-order.model';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    RelatedProductsComponent,
    HeaderComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  productService = inject(ProductServiceService);
  notification = inject(NotificationService);

  productID!: string;

  favouriteProducts = this.productService.getFavourite();

  @Input()
  set productId(pId: string) {
    this.productID = pId;
    this.selectedColor = '';
    this.selectedSize = '';
    this.loadProduct();
  }

  // Variables to hold product and product images
  product!: Product;
  productImages: string[] = [];

  imageIndex: number = 0;
  productQuantity: number = 1;
  selectedColor: string = '';
  selectedSize: string = '';

  warning = false;

  viewedProducts: Product[] = [];

  ngOnInit(): void {
    this.viewedProducts = this.productService.getViewedProduct();

    // Load page info if product ID is valid
    if (this.productID) {
      this.loadProduct();
    }
  }

  // Function to load products
  private loadProduct() {
    this.product = this.productService.selectedProduct(this.productID);

    if (!this.product) {
      console.error('Product not found!');

      return;
    }

    this.productImages = [
      this.product.image?.image1 || 'image.jpg',
      this.product.image?.image2 || 'image.jpg',
      this.product.image?.image3 || 'image.jpg',
      this.product.image?.image4 || 'image.jpg',
    ];
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
  }

  decrease() {
    if (this.productQuantity == 1) {
      return;
    } else {
      this.productQuantity = this.productQuantity - 1;
    }
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  stock() {
    return this.product.quantity > 0 ? 'In Stock' : 'Out of Stock';
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
      'jean',
      'dress',
      'sweatshirt',
      'pant',
    ];

    productCategory = allCategories.filter(
      (cat) => category[cat as keyof ProductCategory]
    );

    return productCategory;
  }

  addToCart(product: Product) {
    // if(product.quantity == 0){
    //   return
    // }
    if (product.color && product.size) {
      if (this.selectedColor == '' || this.selectedSize == '') {
        this.warning = true;

        return;
      }
    } else if (product.color || product.size) {
      if (this.selectedColor == '' && this.selectedSize == '') {
        this.warning = true;

        return;
      }
    }

    let cartProduct: CartProduct = {
      ID: product.id,
      productName: product.title,
      quantity: this.productQuantity,
      totalPrice: product.discount ? product.discount : product.price,
      color: this.selectedColor,
      size: this.selectedSize,
    };

    this.productService.addToCart(cartProduct);
    this.warning = false;

    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Added To your Cart'
    );
  }

  favoriteClicked(product: Product) {
    this.productService.addToFavourite(product);
    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Added to your Favourite Products'
    );
  }

  unFavorite(product: Product) {
    this.productService.removeFromFavourite(product);

    this.notification.notify(
      'products/' + product.image?.image1 || '',
      'This item was Removed from your Favourite Products'
    );
  }

  getFavouriteStatus(productID: string) {
    let favourite = this.favouriteProducts.some(
      (product) => product.product.id == productID
    );

    if (favourite) {
      return true;
    } else {
      return false;
    }
  }
}
