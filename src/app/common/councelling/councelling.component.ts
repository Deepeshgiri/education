import { CommonModule } from '@angular/common';
import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-councelling',
  imports: [CommonModule, FormsModule],
  templateUrl: './councelling.component.html',
  styleUrl: './councelling.component.scss'
})
export class CouncellingComponent implements  AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const slideElement = this.el.nativeElement.querySelector('.slide');
    slideElement.classList.add('show'); // Slide in when component loads
  }


  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted', this.contactForm);
    alert('Your query has been submitted!');
  }
}
export class ContactModalComponent {
 
}