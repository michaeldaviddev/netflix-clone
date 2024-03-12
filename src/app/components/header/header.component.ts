import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse by Languages'
  ];
}
