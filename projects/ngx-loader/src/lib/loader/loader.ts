import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgxLoaderService } from '../ngx-loader.service';

@Component({
  selector: 'ngx-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
  standalone: true,
})
export class NgxLoader {
  @Input()
  zIndex: number = 10_000;

  public isVisible = false;

  constructor(private ngxLoaderService: NgxLoaderService) {
    this.ngxLoaderService.isVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
