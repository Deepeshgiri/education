import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import Aos from 'aos';
import { CoreService } from '../../services/core.services';
import { apiUrl } from '../../appconstant';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, CourseComponent, CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  slideShow: any = [];
  baseUrl = apiUrl;
  toppers: any[] = [];
  testimonials: any = [];
  features: any = [];
  timeLeft: string = '';

  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.getSlideShow();
    this.getToppers();
    this.getFeatures();
    this.startCountdown(new Date('2025-05-01T00:00:00'));
  }

  trackByFn(index: number, item: any): any {
    return item.id || index; // Use `id` if available, otherwise use index
  }
  customOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    dotsEach: true,

    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 5 },
    },
  };


  featureOptions = {
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    dotsEach: true,
    slideBy: 6,

    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 800,

    responsive: {
      0: { items: 2, autoplaySlideBy: 2 },
      600: { items: 4, autoplaySlideBy: 4 },
      1000: { items: 6, autoplaySlideBy: 6 },
    },
  };



  ngAfterViewInit(): void {
    Aos.init({
      duration: 600,
      once: false,
      mirror: true,
    });

    

    Aos.refresh();
    this.getTestimonials();
  }

  ngOnDestroy(): void { }

  startCountdown(targetDate: Date): void {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        this.timeLeft = 'Admissions Closed';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  getSlideShow() {
    this.coreService.getRequest('web/slideshow').subscribe(
      (data: any) => {
        this.slideShow = data.map((item: { image: string }) => ({
          ...item,
          image: 'https://www.pinnacloeducare.com/uploads/slideshow/' + item.image,
        }));
      },
      (error) => {
        console.error('Error fetching slideshow:', error);
      }
    );
  }

  getFeatures() {
    this.coreService.getRequest('web/features').subscribe(
      (data: any) => {
        this.features = data.map((item: { image: string }) => ({
          ...item,
          image: 'https://www.pinnacloeducare.com/uploads/features/' + item.image,
        }));
      },
      (error) => {
        console.error('Error fetching features:', error);
      }
    );
  }

  getTestimonials() {
    this.coreService.getRequest('web/testimonials').subscribe(
      (data: any) => {
        this.testimonials = {
          students: data
            .filter((item: { category: string }) => item.category === 's')
            .map((item: { image: string }) => ({
              ...item,
              image: 'https://www.pinnacloeducare.com/uploads/testimonials/' + item.image,
            })),
          parents: data
            .filter((item: { category: string }) => item.category === 'p')
            .map((item: { image: string }) => ({
              ...item,
              image: 'https://www.pinnacloeducare.com/uploads/testimonials/' + item.image,
            })),
        };

      },
      (error) => {
        console.error('Error fetching testimonials:', error);
      }
    );
  }

  getToppers() {
    this.coreService.getRequest('web/toppers').subscribe(
      (data: any) => {
        this.toppers = data.map((topper: { image: string }) => ({
          ...topper,
          image: topper.image
            ? 'https://www.pinnacloeducare.com/uploads/toppers/' + topper.image
            : '/assets/images/chashmish.png',
        }));
      },
      (error) => console.error('Error fetching toppers:', error)
    );
  }

  directors = [
    {
      name: 'Rishabh Garg',
      role: 'HOD Mathematics',
      qualification: 'B.Tech, IIT Roorkee',
      description: 'Passionate about problem-solving and mentoring students to achieve excellence in Mathematics.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/rishabh-garg.png',
      linkedin: 'https://linkedin.com/in/rishabhgarg',
      youtube: 'https://youtube.com/c/RishabhGargMaths',
      facebook: 'https://facebook.com/rishabhgarg',
      instagram: 'https://instagram.com/rishabhgarg',
    },
    {
      name: 'Romy Garg',
      role: 'HOD Chemistry',
      qualification: 'M.Tech. ICT Mumbai',
      description: 'Dedicated to making Chemistry intuitive and engaging for students aspiring for competitive exams.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/romy-garg.png',
      twitter: 'https://twitter.com/romygarg',
      linkedin: 'https://linkedin.com/in/romygarg',
      facebook: 'https://facebook.com/romygarg',
    },
    {
      name: 'Novel Jindal',
      role: 'HOD Physics',
      qualification: 'B.Tech, IIT Roorkee',
      description: 'Physics enthusiast with a knack for simplifying complex concepts and fostering critical thinking.',
      image: 'https://www.pinnacloeducare.com/uploads/teachers/novel-jindal.png',
      linkedin: 'https://linkedin.com/in/noveljindal',
      facebook: 'https://facebook.com/noveljindal',
      instagram: 'https://instagram.com/noveljindal',
    },
  ];


  newsEvents = [
    {
      title: 'Upcoming Seminar on AI in Education',
      description: 'Join us for an insightful discussion on AI-driven learning methodologies.',
      image: './assets/images/medical1.png',
      category: 'Education',

      link: '#'
    },
    {
      title: 'Annual Science Fair - Register Now!',
      description: 'Don\'t miss our grand Science Fair with exciting projects and prizes.',
      image: './assets/images/foundation1.png',
      category: 'Events',
      link: '#'
    },
    {
      title: 'Exclusive Coding Bootcamp for Beginners',
      description: 'Kickstart your programming journey with our expert-led bootcamp.',
      image: './assets/images/engineering1.jpg',
      category: 'Workshop',

      link: '#'
    }
  ];
}