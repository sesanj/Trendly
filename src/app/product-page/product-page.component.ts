import { Component, inject, OnInit, Input } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { ProductServiceService } from '../services/product-service.service';
import { RelatedProductsComponent } from '../related-products/related-products.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RelatedProductsComponent, HeaderComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  service = inject(ProductServiceService);

  productID!: string;

  allProducts = this.service.allProducts;

  // Getting product id from url
  @Input()
  set productId(pId: string) {
    this.productID = pId;
    this.loadProduct();
  }

  // Variables to hold product and product images
  product!: Product;
  productImages: string[] = [];

  imageIndex: number = 0;
  productQuantity: number = 1;
  selectedColor!: string;
  selectedSize!: string;

  viewedProducts: Product[] = this.service.getAllProducts();

  ngOnInit(): void {
    this.viewedProducts = this.viewedProducts.slice(0, 4);

    // Load page info if product ID is valid
    if (this.productID) {
      this.loadProduct();
    }
  }

  // Function to load products
  private loadProduct() {
    this.product = this.service.selectedProduct(this.productID);

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

  addToCart(product: Product) {
    this.service.addToCart(product);
  }
}
