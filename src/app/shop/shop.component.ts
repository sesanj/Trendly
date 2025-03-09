import { Component, inject, Input, OnInit } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { ProductServiceService } from '../services/product-service.service';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductComponent,
    FormsModule,
    NgxSliderModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  @Input()
  set filter(filter: string) {
    switch (filter) {
      case 'men':
        this.radioSelection = 'Men';
        break;
      case 'women':
        this.radioSelection = 'Women';
        break;
      case 'deals':
        this.productStatus.filter((status) =>
          status.status === 'ON SALE' ? (status.selected = true) : false
        );
        break;
      default:
        this.radioSelection = 'All';
    }
    this.filterProducts();
  }

  service = inject(ProductServiceService);
  allProducts: Product[] = this.service.allProducts;
  filteredProducts: Product[] = this.allProducts;
  selectedSize!: string;

  radio = ['All', 'Men', 'Women'];
  radioSelection: string = 'All';

  sortSelection: string = 'default';

  print() {
    console.log('Radio ' + this.radioSelection);
  }

  ngOnInit(): void {}

  categoriesList = [
    { cat: 'Shirt', selected: false },
    { cat: 'Bag', selected: false },
    { cat: 'Shoe', selected: false },
    { cat: 'Pant', selected: false },
    { cat: 'Skirt', selected: false },
    { cat: 'Dress', selected: false },
    { cat: 'Sweatshirt', selected: false },
    { cat: 'Jacket', selected: false },
    { cat: 'Hoodie', selected: false },
    { cat: 'Jean', selected: false },
  ];

  sizeList = [
    { size: 'S', selected: false },
    { size: 'M', selected: false },
    { size: 'L', selected: false },
    { size: 'XL', selected: false },
    { size: 'XXL', selected: false },
  ];

  minPrice: number = 0;
  maxPrice: number = 300;

  productStatus = [
    { status: 'IN STOCK', selected: false },
    { status: 'ON SALE', selected: false },
    { status: 'TRENDING', selected: false },
    { status: 'NEW', selected: false },
    { status: 'HOT', selected: false },
    { status: 'FEATURED', selected: false },
  ];

  options = {
    floor: 0,
    ceil: 300,
    step: 0,
    hidePointerLabels: true,
    hideLimitLabels: true,
  };

  filterProducts() {
    // Switch block to handle radio buttons for product selection
    switch (this.radioSelection) {
      case 'Men':
        this.filteredProducts = this.allProducts.filter(
          (product) => product.category.men
        );
        break;
      case 'Women':
        this.filteredProducts = this.allProducts.filter(
          (product) => product.category.women
        );
        break;
      default:
        this.filteredProducts = this.allProducts.slice();
    }

    // Handling product sort selection

    switch (this.sortSelection) {
      case 'lowHigh':
        this.filteredProducts = this.filteredProducts.sort((a, b) => {
          const priceA = a.discount ? a.discount : a.price;
          const priceB = b.discount ? b.discount : b.price;
          return priceA - priceB;
        });
        break;
      case 'highLow':
        this.filteredProducts = this.filteredProducts.sort((a, b) => {
          const priceA = a.discount ? a.discount : a.price;
          const priceB = b.discount ? b.discount : b.price;
          return priceB - priceA;
        });
        break;
      default:
        break;
    }

    // Handling the category list
    if (this.categoriesList.some((cat) => cat.selected)) {
      this.filteredProducts = this.filteredProducts.filter((product) =>
        this.categoriesList.some(
          (cat) =>
            cat.selected &&
            product.category[cat.cat.toLowerCase() as keyof ProductCategory]
        )
      );
    }

    // Handling price filter
    this.filteredProducts = this.filteredProducts.filter((product) =>
      product.discount
        ? product.discount >= this.minPrice && product.discount <= this.maxPrice
        : product.price >= this.minPrice && product.price <= this.maxPrice
    );

    // Handling size filter
    if (this.sizeList.some((size) => size.selected)) {
      this.filteredProducts = this.filteredProducts.filter((product) =>
        this.sizeList.some(
          (size) =>
            size.selected && product.size?.some((sizes) => sizes == size.size)
        )
      );
    }

    // Handling product status dynamically
    if (
      this.productStatus.some(
        (status) => status.selected && status.status == 'IN STOCK'
      )
    ) {
      this.filteredProducts = this.filteredProducts.filter(
        (product) => product.quantity > 0
      );
    }
    if (
      this.productStatus.some(
        (status) => status.selected && status.status == 'ON SALE'
      )
    ) {
      this.filteredProducts = this.filteredProducts.filter(
        (product) => product.discount! > 0
      );
    }
    if (
      this.productStatus.some(
        (status) =>
          status.selected &&
          status.status != 'ON SALE' &&
          status.status != 'IN STOCK'
      )
    ) {
      this.filteredProducts = this.filteredProducts.filter((product) =>
        this.productStatus.some(
          (status) => status.selected && product.tag == status.status
        )
      );
    }
  }

  quantity(cat: string) {
    return this.allProducts.filter(
      (product) =>
        product.category?.[cat.toLowerCase() as keyof ProductCategory]
    ).length;
  }

  formatCat(cat: string) {
    return cat == 'Men' || cat == 'Women' || cat == 'Dress' ? '' : 's';
  }
}
