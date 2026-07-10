import { Component } from '@angular/core';
import {CopywriteComponent} from './copywrite/copywrite.component';

@Component({
    selector: 'prb-footer',
    imports: [
        CopywriteComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
