import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFallingBackground]',
  standalone: true
})
export class FallingBackgroundDirective implements AfterViewInit {
  private maxElements = 10;
  private currentElements = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.startFallingElements();
  }

  startFallingElements() {
    setInterval(() => this.createFallingElement(), 2000);
  }

  createFallingElement() {
    if (this.currentElements >= this.maxElements) return;

    const element = this.renderer.createElement('div');
    const size = Math.random() * 200 + 10;
    const positionX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 6 + 3;
    const delay = Math.random() * 4;

    this.renderer.addClass(element, 'falling-element');
    this.renderer.setStyle(element, 'width', `${size}px`);
    this.renderer.setStyle(element, 'height', `${size}px`);
    this.renderer.setStyle(element, 'left', `${positionX}px`);
    this.renderer.setStyle(element, 'animationDuration', `${animationDuration}s`);
    this.renderer.setStyle(element, 'animationDelay', `${delay}s`);

    this.renderer.appendChild(this.el.nativeElement, element);
    this.currentElements++;

    element.addEventListener('animationend', () => {
      this.renderer.removeChild(this.el.nativeElement, element);
      this.currentElements--;
    });
  }
}
