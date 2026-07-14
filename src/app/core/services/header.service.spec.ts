import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';

import {HeaderService} from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an initial empty subtitle', () => {
    // Read the signal value by calling it like a function
    expect(service.subtitle()).toBe('');
  });

  it('should update the subtitle when setSubtitle is called', () => {
    const testSubtitle = 'Welcome to the Dashboard';

    service.setSubtitle(testSubtitle);

    // Verify the signal updated its value
    expect(service.subtitle()).toBe(testSubtitle);
  });

  it('should clear the subtitle when clearSubtitle is called', () => {
    service.setSubtitle('Temporary Subtitle');
    expect(service.subtitle()).toBe('Temporary Subtitle'); // Sanity check

    service.clearSubtitle();

    // Verify the signal reverted to an empty string
    expect(service.subtitle()).toBe('');
  });
});
