import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private subtitleSignal = signal<string>('');
  subtitle = this.subtitleSignal.asReadonly();

  setSubtitle(newSubtitle: string) {
    this.subtitleSignal.set(newSubtitle);
  }

  clearSubtitle(): void {
    this.subtitleSignal.set('');
  }
}
