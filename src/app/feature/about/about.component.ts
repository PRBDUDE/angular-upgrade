import { Component } from '@angular/core';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent extends BasePageWithSubtitleComponent{
    override pageSubtitle = 'About Us';

}
