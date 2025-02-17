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
  // isMobile: boolean = window.innerWidth < 992; // Detect screen size

  // // Toggle submenu on mobile when clicking a dropdown
  // toggleSubMenu(event: Event) {
  //   if (this.isMobile) {
  //     event.preventDefault();
  //     let submenu = (event.target as HTMLElement).nextElementSibling;
      
  //     if (submenu && submenu.classList.contains("dropdown-menu")) {
  //       submenu.classList.toggle("show");

  //       // Close other open submenus
  //       let parentMenu = (event.target as HTMLElement).closest(".dropdown-menu");
  //       if (parentMenu) {
  //         let openSubmenus = parentMenu.querySelectorAll(".dropdown-menu.show");
  //         openSubmenus.forEach((openSubmenu) => {
  //           if (openSubmenu !== submenu) {
  //             openSubmenu.classList.remove("show");
  //           }
  //         });
  //       }
  //     }
  //   }
  // }

  // // Listen for window resize to update `isMobile`
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.isMobile = (event.target as Window).innerWidth < 992;
  // }
}