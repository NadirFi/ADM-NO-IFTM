import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
