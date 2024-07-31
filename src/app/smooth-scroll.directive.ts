import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  @Input() appSmoothScroll: string | undefined;
  @Input() offset = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    if (this.appSmoothScroll) {
      const element = document.querySelector(this.appSmoothScroll);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - this.offset,
          behavior: 'smooth'
        });
      }
    }
  }
}
