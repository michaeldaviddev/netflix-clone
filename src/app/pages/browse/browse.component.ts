import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RowComponent } from '../../components/row/row.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, RowComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {

}
