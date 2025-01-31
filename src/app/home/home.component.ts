import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { CategorySectionComponent } from '../category-section/category-section.component';
import { SpecialCollectionComponent } from '../special-collection/special-collection.component';
import { CardSectionComponent } from '../card-section/card-section.component';
import { SalesProductsComponent } from '../sales-products/sales-products.component';
import { ReviewComponent } from '../review/review.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    CategorySectionComponent,
    SpecialCollectionComponent,
    CardSectionComponent,
    SalesProductsComponent,
    ReviewComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
