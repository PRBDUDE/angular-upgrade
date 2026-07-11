import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {HeaderService} from '../services/header.service';
import {MobileMenuComponent} from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'prb-header',
  imports: [
    MobileMenuComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerService = inject(HeaderService);
}
