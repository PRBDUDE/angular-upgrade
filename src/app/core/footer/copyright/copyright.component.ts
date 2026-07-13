import {Component, input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'prb-copyright',
  imports: [],
  template: `
    {{ copyrightHolder() }} &copy; {{ year }}
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  copyrightHolder = input<string>('Programmer Roadblocks');
  year = new Date().getFullYear();
}
