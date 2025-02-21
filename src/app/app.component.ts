import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './layout/footer/footer.component';
import { FallingBackgroundDirective } from './falling-background.directive';

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

}
