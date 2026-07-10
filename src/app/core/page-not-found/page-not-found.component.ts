import { Component } from '@angular/core';
import {BasePageWithSubtitleComponent} from '../base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'prb-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent extends BasePageWithSubtitleComponent{
    override pageSubtitle = 'Page Not Found';

}
