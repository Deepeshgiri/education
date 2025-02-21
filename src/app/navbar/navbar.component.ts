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

}