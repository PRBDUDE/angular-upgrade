import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Page Not Found';

}
