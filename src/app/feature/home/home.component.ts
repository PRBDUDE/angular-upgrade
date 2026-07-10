import {Component} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Home';

}
