import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TmdbService } from './services/tmdb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix-clone';
  movieList: any = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    // this.getSeries();
  }

  getSeries() {
    this.tmdbService.getSeries().subscribe((data) => {
      console.log(data);
    });
  }
}
