import { ComponentFixture, TestBed } from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import { FooterComponent } from './footer.component';
import { Component } from '@angular/core';
import {CopyrightComponent} from './copyright/copyright.component';

// Option A: Mocking the child component for a isolated/shallow unit test
@Component({
  selector: 'prb-copyright',
  standalone: true,
  template: '<div>Mock Copyright</div>'
})
class MockCopyrightComponent {}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
      // If you want to isolate the footer and not render the real CopyrightComponent,
      // you can override its imports like this:
      .overrideComponent(FooterComponent, {
        remove: { imports: [ CopyrightComponent ] },
        add: { imports: [MockCopyrightComponent] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Triggers initial change detection
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the layout successfully', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Add your template assertions here
    expect(compiled).toBeDefined();
  });
});
