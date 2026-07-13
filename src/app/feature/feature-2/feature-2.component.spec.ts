import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';

import {Feature2Component} from './feature-2.component';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

describe('Feature2Component', () => {
  let component: Feature2Component;
  let fixture: ComponentFixture<Feature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Feature2Component,
        BasePageWithSubtitleComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Feature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set subTitle', () => {
    expect(component.pageSubtitle).toEqual('Feature Two');
  });
});
