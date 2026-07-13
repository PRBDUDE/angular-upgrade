import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';

import {AboutComponent} from './about.component';
import {BasePageWithSubtitleComponent} from '../../core/base-page-with-subtitle/base-page-with-subtitle';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutComponent,
        BasePageWithSubtitleComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set subTitle', () => {
    expect(component.pageSubtitle).toEqual('About Us');
  });
});
