import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, beforeEach, expect} from 'vitest';
import {CopyrightComponent} from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default copyright holder and current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear().toString();

    // Verify default signal value and year property
    expect(component.copyrightHolder()).toBe('Programmer Roadblocks');
    expect(component.year).toBe(new Date().getFullYear());

    // Verify DOM output
    expect(compiled.textContent).toContain('Programmer Roadblocks');
    expect(compiled.textContent).toContain(`© ${currentYear}`);
  });

  it('should update the template when a custom copyright holder is provided', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Use componentRef.setInput to update the Angular signal input safely
    fixture.componentRef.setInput('copyrightHolder', 'Custom Tech Corp');
    fixture.detectChanges();

    // Verify the DOM reflects the updated signal value
    expect(compiled.textContent).toContain('Custom Tech Corp');
    expect(compiled.textContent).not.toContain('Programmer Roadblocks');
  });
});
