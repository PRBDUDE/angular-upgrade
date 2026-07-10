import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {MenuComponent} from './core/menu/menu.component';

@Component({
  selector: 'prb-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Upgrade';

}
