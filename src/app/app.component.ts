
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeaturesComponent} from "./features/features.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProject';
}