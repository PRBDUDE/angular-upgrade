import { Component, inject } from '@angular/core';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'prb-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerService = inject(HeaderService);
}
