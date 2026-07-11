import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CopyrightComponent} from './copyright.component';

describe('CopyrightComponent', () => {
  let component: CopyrightComponent;
  let fixture: ComponentFixture<CopyrightComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validate contents', () => {
    it('Should contain current year', () => {
      const currentYear = new Date().getFullYear().toString();
      expect(compiled.innerText).toContain(currentYear);
    });

    it('Should contain Programmer Roadblocks', () => {
      expect(compiled.innerText).toContain('Programmer Roadblocks');
    });

    it('Should contain &copy;', () => {
      expect(compiled.innerText).toContain('\u00A9');
    });
  });
});
