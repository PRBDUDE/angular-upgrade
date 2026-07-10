import {Component} from '@angular/core';
import {MenuComponent} from '../../menu/menu.component';

@Component({
  selector: 'prb-mobile-menu',
  imports: [
    MenuComponent
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
