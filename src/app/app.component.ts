import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './layout/footer/footer.component';
import { FallingBackgroundDirective } from './falling-background.directive';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'education';


  isContactMenuOpen = false;

toggleContactMenu() {
  this.isContactMenuOpen = !this.isContactMenuOpen;
}

ngOnInit(): void {
  
  Aos.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing effect
    once: false, // Run animation only once
    mirror:true
  });
  Aos.refresh();
}


}
