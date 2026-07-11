import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-feature-1',
  imports: [],
  templateUrl: './feature-1.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './feature-1.component.scss'
})
export class Feature1Component extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Feature One';

}
