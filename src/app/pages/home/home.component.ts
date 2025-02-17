import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  directors = [
    {
      name: 'Rishabh Garg',
      role: 'HOD Mathematics',
      qualification: 'B.Tech, IIT Roorkee',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/rishabh-garg.png'
    },
    {
      name: 'Romy Garg',
      role: 'HOD Chemistry',
      qualification: 'M.Tech. ICT Mumbai',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/romy-garg.png'
    },
    {
      name: 'Novel Jindal',
      role: 'HOD Physics',
      qualification: 'B. Tech, IIT Roorkee',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/novel-jindal.png'
    }
  ];




  images = [
    { src: 'assets/images/hero/image-1.png', text: 'Card 1 description' },
    { src: 'assets/images/hero/image-2.png', text: 'Card 2 description' },
    { src: 'assets/images/hero/image-3.png', text: 'Card 3 description' },
    { src: 'assets/images/hero/image-4.png', text: 'Card 4 description' },
    { src: 'assets/images/hero/image-5.png', text: 'Card 5 description' },
    { src: 'assets/images/hero/image-6.png', text: 'Card 6 description' },
    { src: 'assets/images/hero/image-7.png', text: 'Card 7 description' },
    { src: 'assets/images/hero/image-8.png', text: 'Card 8 description' }
  ];

  visibleCards: any[] = [];
  startIndex = 0;
  autoSlideInterval: any;
  cardsPerPage = 5; // Default cards per page

  ngOnInit(): void {
    // Show first set of images based on screen size
    this.setVisibleCards();
    
    // Start auto-sliding every 2 seconds
    this.autoSlideInterval = setInterval(() => this.nextCard(), 2000);
  }

  // Adjust the number of visible cards based on screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.setVisibleCards();
  }

  setVisibleCards(): void {
    // Get the current screen size
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      this.cardsPerPage = 1; // Show 1 card on extra small screens
    } else if (screenWidth >= 576 && screenWidth < 768) {
      this.cardsPerPage = 2; // Show 2 cards on small screens
    } else if (screenWidth >= 768 && screenWidth < 992) {
      this.cardsPerPage = 3; // Show 3 cards on medium screens
    } else if (screenWidth >= 992) {
      this.cardsPerPage = 5; // Show 5 cards on large screens
    }

    // Update visible cards based on the current cardsPerPage
    this.visibleCards = this.images.slice(this.startIndex, this.startIndex + this.cardsPerPage);
  }

  nextCard(): void {
    if (this.startIndex + this.cardsPerPage < this.images.length) {
      this.startIndex++;
    } else {
      this.startIndex = 0; // Loop back to the beginning
    }
    this.setVisibleCards();
  }

  prevCard(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
    } else {
      this.startIndex = this.images.length - this.cardsPerPage; // Go to the last set
    }
    this.setVisibleCards();
  }

  stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }
}
