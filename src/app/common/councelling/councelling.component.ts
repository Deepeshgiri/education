import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-councelling',
  imports: [],
  templateUrl: './councelling.component.html',
  styleUrl: './councelling.component.scss'
})
export class CouncellingComponent implements  AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const slideElement = this.el.nativeElement.querySelector('.slide');
    slideElement.classList.add('show'); // Slide in when component loads
  }
}