import {AfterViewInit, Component, ElementRef, HostListener, Inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {MenuComponent} from './core/menu/menu.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'prb-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Upgrade';

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  contentHeight = signal<number>(0);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.measureElements();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.measureElements();
  }

  measureElements(): void {
    const hHeight = 64;
    const fHeight = 34;
    const cHeight = window.outerHeight - fHeight - hHeight - 100;

    this.contentHeight.set(cHeight);

    this.document.documentElement.style.setProperty('--content-height', `${cHeight}px`);
  }
}
