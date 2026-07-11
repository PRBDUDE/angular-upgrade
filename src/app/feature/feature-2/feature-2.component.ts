import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-feature-2',
  imports: [],
  templateUrl: './feature-2.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './feature-2.component.scss'
})
export class Feature2Component extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Feature Two';

}
