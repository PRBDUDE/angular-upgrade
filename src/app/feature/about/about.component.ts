import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-about',
  imports: [],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.component.scss'
})
export class AboutComponent extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'About Us';

}
