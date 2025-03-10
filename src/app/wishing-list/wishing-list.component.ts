import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-wishing-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './wishing-list.component.html',
  styleUrl: './wishing-list.component.css',
})
export class WishingListComponent {}
