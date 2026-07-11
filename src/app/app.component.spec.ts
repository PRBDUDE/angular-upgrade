import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CopyrightComponent} from './core/footer/copyright/copyright.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        CopyrightComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
