import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Feature1Component} from './feature-1.component';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

describe('Feature1Component', () => {
  let component: Feature1Component;
  let fixture: ComponentFixture<Feature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Feature1Component,
        BasePageWithSubtitleComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Feature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set subTitle', () => {
    expect(component.pageSubtitle).toEqual('Feature One');
  });
});
