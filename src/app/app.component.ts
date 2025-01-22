
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeaturesComponent} from "./features/features.component";
import {HeaderComponent} from "./header/header.component";
import {HeaderAndFooterComponent} from "./header-and-footer/header-and-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesComponent, HeaderComponent, HeaderAndFooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProject';
}