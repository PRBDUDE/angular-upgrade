import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CopyrightComponent} from './copyright/copyright.component';

@Component({
    selector: 'prb-footer',
    imports: [
        CopyrightComponent
    ],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
