import { CommonModule } from '@angular/common';
import { Component,OnInit, } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ngOnInit(){
    AOS.init();
    AOS.refreshHard();
  }

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

  visionText = `Pinnacle, standing for the "Ultimate Height", is a group of zealous, vibrant, and erudite IITians and professionals. 
  We mix fundamental teaching ideologies with scientific and technological methods to enhance student learning. 
  Our approach goes beyond education—it creates experiences that translate into deeper learning.`;

  valuesAndVisionText = `Founded by three engineers, Pinnacle Educare was established in 2017 with a mission to enhance student learning. 
  Our goal is to nurture students for the competitive world and help them secure seats in India’s most prestigious institutions.`;

  commitments = [
    { icon: 'access_time', text: 'Teaching students to develop respect for time and their surroundings.' },
    { icon: 'lightbulb', text: 'Helping students realize their true potential.' },
    { icon: 'build', text: 'Equipping them with tools to explore new dimensions of the world.' }
  ];

  competitiveExamText = `Pinnacle takes the lead in mentoring and training students for India's most competitive examinations, 
  including IIT-JEE, BITSAT, NEET, KVPY, and Olympiads.`;

  aimsAndResponsibilitiesText = `Pinnacle is different from the traditional **cram-and-spit** style of tutoring. 
  We focus on **real-world education**, training young minds responsibly. 
  At Pinnacle, we don’t just produce results—we provide a **holistic experience** that transforms students into responsible professionals and individuals.`;

  aims = [
    { icon: 'check_circle', text: 'Learns honesty towards himself.' },
    { icon: 'lightbulb', text: 'Discovers his true self.' },
    { icon: 'psychology', text: 'Learns to handle tough situations smartly.' },
    { icon: 'calculate', text: 'Develops strong aptitude for core subjects (Maths, Physics, Chemistry, Biology).' },
    { icon: 'construction', text: 'Invents tools to apply his knowledge.' }
  ];
}