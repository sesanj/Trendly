import { Component, inject, Input } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { ProductServiceService } from '../services/product-service.service';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
})
export class RelatedProductsComponent {
  service = inject(ProductServiceService);

  @Input({ required: true }) product!: Product;

  get relatedProducts() {
    const allProducts = this.service.getAllProducts();
    const category = this.product.category;

    if (!category || !allProducts.length) return [];

    // Define valid category groups
    const relatedCategories = [
      ['skirt', 'pants'],
      ['dress', 'shirt', 'sweatshirt'],
      ['hoodie', 'jacket'],
      ['bag', 'shoe'],
    ];

    // Find the matching category group
    const matchedGroup = relatedCategories.find((group) =>
      group.some(
        (cat) => category.women && category[cat as keyof ProductCategory]
      )
    );

    if (!matchedGroup) return allProducts; // No specific match, return all

    return allProducts.filter(
      (product) =>
        product !== this.product &&
        matchedGroup.some(
          (cat) =>
            product.category.women &&
            product.category[cat as keyof ProductCategory]
        )
    );
  }
}
