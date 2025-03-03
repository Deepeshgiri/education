import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, RouterModule], // ✅ Ensure RouterModule is imported
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  openSubmenus: { [key: string]: boolean } = {}; // Track submenu states

  toggleSubmenu(event: Event, submenu: string) {
    event.preventDefault(); // Prevent default anchor behavior
    event.stopPropagation(); // Stop event from bubbling up

    // Toggle submenu state
    this.openSubmenus[submenu] = !this.openSubmenus[submenu];
  }


  

}