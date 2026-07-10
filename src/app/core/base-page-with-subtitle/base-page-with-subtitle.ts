import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../services/header.service';

@Component({
  template: ``,
  standalone: false
})
export abstract class BasePageWithSubtitleComponent implements OnInit, OnDestroy {
  protected headerService = inject(HeaderService);
  abstract readonly pageSubtitle: string;

  init() {
  }

  destroy() {
  }

  ngOnInit() {
    if (this.pageSubtitle) {
      this.headerService.setSubtitle(this.pageSubtitle);
    }
    this.init();
  }

  ngOnDestroy() {
    this.headerService.clearSubtitle();
    this.destroy();
  }
}
