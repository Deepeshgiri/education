import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener ,AfterViewInit, ElementRef} from '@angular/core';
import player from 'lottie-web'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent implements OnInit {
  directors = [
    {
      name: 'Rishabh Garg',
      role: 'HOD Mathematics',
      qualification: 'B.Tech, IIT Roorkee',
      description: 'Passionate about problem-solving and mentoring students to achieve excellence in Mathematics.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/rishabh-garg.png',
      twitter: 'https://twitter.com/rishabhgarg',
      linkedin: 'https://linkedin.com/in/rishabhgarg',
      youtube: 'https://youtube.com/c/RishabhGargMaths',
      facebook: 'https://facebook.com/rishabhgarg',
      instagram: 'https://instagram.com/rishabhgarg'
    },
    {
      name: 'Romy Garg',
      role: 'HOD Chemistry',
      qualification: 'M.Tech. ICT Mumbai',
      description: 'Dedicated to making Chemistry intuitive and engaging for students aspiring for competitive exams.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/romy-garg.png',
      twitter: 'https://twitter.com/romygarg',
      linkedin: 'https://linkedin.com/in/romygarg',
      youtube: 'https://youtube.com/c/RomyGargChemistry',
      facebook: 'https://facebook.com/romygarg',
      instagram: 'https://instagram.com/romygarg'
    },
    {
      name: 'Novel Jindal',
      role: 'HOD Physics',
      qualification: 'B.Tech, IIT Roorkee',
      description: 'Physics enthusiast with a knack for simplifying complex concepts and fostering critical thinking.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/novel-jindal.png',
      twitter: 'https://twitter.com/noveljindal',
      linkedin: 'https://linkedin.com/in/noveljindal',
      youtube: 'https://youtube.com/c/NovelJindalPhysics',
      facebook: 'https://facebook.com/noveljindal',
      instagram: 'https://instagram.com/noveljindal'
    }
  ];
  
  features = [
    { title: 'Motivational & Counselling Sessions', image: 'https://www.pinnacloeducare.com/uploads/features/motivation.PNG' },
    { title: 'Performance Analysis & Report', image: 'https://www.pinnacloeducare.com/uploads/features/performance analaysis.PNG' },
    { title: 'Lecture Recording Lab', image: 'https://www.pinnacloeducare.com/uploads/features/lecture recording.PNG' },
    { title: 'Objective + Subjective', image: 'https://www.pinnacloeducare.com/uploads/features/objective subjective.PNG' },
    { title: 'Smart AC Classrooms', image: 'https://www.pinnacloeducare.com/uploads/features/acclassroom.PNG' },
    { title: 'IITIAN Doctor Faculty', image: 'https://www.pinnacloeducare.com/uploads/features/doctor.PNG' },
    { title: 'Unlimited Doubt Session', image: 'https://www.pinnacloeducare.com/uploads/features/doubt.PNG' },
    { title: 'Extra Support to Weaker Students', image: 'https://www.pinnacloeducare.com/uploads/features/extra support.PNG' },
    { title: 'CCTV Campus', image: 'https://www.pinnacloeducare.com/uploads/features/cctv.PNG' },
    { title: 'Pre-Planned Coursework & Planner', image: 'https://www.pinnacloeducare.com/uploads/features/preplanned.PNG' },
    { title: 'Biometric Attendance', image: 'https://www.pinnacloeducare.com/uploads/features/biometric.PNG' },
    { title: 'Revision Classes & Self Study Zone', image: 'https://www.pinnacloeducare.com/uploads/features/revision classes.PNG' }
  ];


  images = [
    { src: 'assets/images/toppers/aashi.jpg', text: 'Deepesh kumar description' },
    { src: 'assets/images/toppers/himanshi.jpg', text: 'Card 2 description' },
    { src: 'assets/images/toppers/priya.jpg', text: 'Card 3 description' },
    { src: 'assets/images/toppers/prachi.jpg', text: 'Card 4 description' },
    { src: 'assets/images/toppers/aashi.jpg', text: 'Card 5 description' },
    { src: 'assets/images/toppers/priya.jpg', text: 'Card 6 description' },
    { src: 'assets/images/toppers/prachi.jpg', text: 'Card 7 description' },
    { src: 'assets/images/toppers/himanshi.jpg', text: 'Card 8 description' }
  ];


  testimonials = {
    students: [
      {
        name: 'Ishatpreet',
        image: 'https://www.pinnacloeducare.com/ishpreet.PNG',
        message:
          'Pinnacle provides a right way to success. All the teachers of Pinnacle are very supportive. They helped me in setting my goals and time. They showed me the mirror of guidance to help me for reaching Pinnacle.',
      },
      {
        name: 'Yadwinder Singh',
        image: 'https://www.pinnacloeducare.com/yadwinder.JPG',
        message:
          'My experience here was great. I am fully satisfied with the Pinnacle System. All the faculty members have great experience of producing awesome results.',
      },
    ],
    parents: [
      {
        name: 'Reeta Rani',
        image: 'https://www.pinnacloeducare.com/uploads/testimonials/reetarani.JPG',
        message:
          'My daughter Hitakshi is a student of Pinnacle Educare in the medical stream. As parents, we are highly satisfied with the hard work and teaching methodology of the Pinnacle faculty.',
      },
      {
        name: 'Kuldeep Singh',
        image: 'https://www.pinnacloeducare.com/uploads/testimonials/kuldeep%20Singh.PNG',
        message:
          'My daughter is in touch with Pinnacle Educare since its establishment. The dedicated and diligent team at Pinnacle has come up with great results in Sangrur within a short time span. The team focuses on quality education.',
      },
    ],
  };
  
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
