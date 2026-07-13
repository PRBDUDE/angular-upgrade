import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-contact',
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends BasePageWithSubtitleComponent {
  override pageSubtitle = 'Contact Us';

}
