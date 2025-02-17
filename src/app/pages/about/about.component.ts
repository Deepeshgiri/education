import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  features = [
    {
      title: 'Experienced Faculty',
      description: 'Our faculty members are from IITs and other prestigious institutes, with years of teaching experience.',
      icon: 'school' // Material Icon
    },
    {
      title: 'All Subjects Under One Roof',
      description: 'No need to run around for different subjects. We offer everything under one structured system.',
      icon: 'menu_book' // Material Icon
    },
    {
      title: 'Air-Conditioned Campus',
      description: 'Comfortable classrooms with a peaceful environment to maximize learning potential.',
      icon: 'ac_unit' // Material Icon
    },
    {
      title: 'Tailor-Made Study Material',
      description: 'Our “Pathfinder” study material ensures concept clarity and problem-solving techniques.',
      icon: 'library_books' // Material Icon
    },
    {
      title: 'Daily Practice & Tests',
      description: 'Regular assessment through DPPs and PPTs to track progress and improve performance.',
      icon: 'assignment' // Material Icon
    },
    {
      title: 'Scholarship Program',
      description: 'Financial aid of up to 100% for deserving students to ensure education for all.',
      icon: 'emoji_events' // Material Icon
    }
  ];
  

}
