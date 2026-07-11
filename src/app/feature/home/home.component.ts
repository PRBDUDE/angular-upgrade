import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-home',
  imports: [],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Home';

}
