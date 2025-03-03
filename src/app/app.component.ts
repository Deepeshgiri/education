import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './layout/footer/footer.component';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Pinnacloeducare';
  isContactMenuOpen = false;

  constructor(private router: Router) {} 

  toggleContactMenu() {
    this.isContactMenuOpen = !this.isContactMenuOpen;
  }

  ngAfterViewInit() {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true
    });
  }

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
    
    // ✅ Reset scroll on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        Aos.refreshHard();
      }
    });
  }
}
