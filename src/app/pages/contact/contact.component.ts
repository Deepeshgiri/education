import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.contactForm);
    alert('Thank you for reaching out! We will get back to you soon.');
    this.contactForm = { name: '', email: '', phone: '', message: '' }; // Reset form
  }
}
