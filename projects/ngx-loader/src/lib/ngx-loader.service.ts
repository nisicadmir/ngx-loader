import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxLoaderService {
  public isVisible$ = new BehaviorSubject<boolean>(false);
  show(): void {
    this.isVisible$.next(true);
  }
  hide(): void {
    this.isVisible$.next(false);
  }

  toggle(): void {
    this.isVisible$.next(!this.isVisible$.value);
  }
}
