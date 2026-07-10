import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-copywrite',
  imports: [],
  template: `
    {{ copyrightHolder() }} &copy; {{ year }}
  `,
  styleUrl: './copywrite.component.scss'
})
export class CopywriteComponent {
  copyrightHolder = input<string>('Programmer Roadblocks');
  year = new Date().getFullYear();
}
