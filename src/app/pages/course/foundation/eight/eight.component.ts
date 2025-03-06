import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-eight',
  imports: [CommonModule],
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.scss']
})
export class EightComponent {

  ngOnInit() {
 AOS.refresh();
 AOS.init();
 this.onScroll();
  }

  courseTitle = "Master Class 8 with Expert Guidance";
  overviewText = "Unlock your potential with our comprehensive Class 8 offline classes. Designed to align with the latest CBSE/ICSE curriculum, this course offers interactive lessons, expert mentorship, and a wealth of resources to help you excel academically and beyond.";

  courseFeatures = [
    { icon: "video_library", title: "Engaging Video Lectures", description: "High-quality, interactive video lessons to make learning fun and effective.", color: "primary" },
    { icon: "groups", title: "Interactive Classes", description: "Join  sessions with expert mentors and peers for real-time learning.", color: "danger" },
    { icon: "schedule", title: "Flexible Learning", description: "Study at your own pace with 24/7 access to course materials.", color: "warning" },
    { icon: "auto_stories", title: "Comprehensive Resources", description: "Access detailed notes, practice questions, and reference materials.", color: "info" },
    { icon: "support_agent", title: "Personalized Support", description: "Get one-on-one doubt-solving sessions with experienced mentors.", color: "success" },
    { icon: "menu_book", title: "Extensive Library", description: "Explore a vast collection of books, notes, and study resources.", color: "secondary" }
  ];
  

// For "Who Is This For?" Section (Class 8)
eligibilityHighlights = [
  { icon: "bi-book-half", text: "Complete coverage of CBSE/ICSE Class 8 syllabus", color: "primary" },
  { icon: "bi-lightbulb", text: "Sharpen problem-solving skills for competitive exams", color: "success" },
  { icon: "bi-brain", text: "Develop analytical and critical thinking abilities", color: "danger" },
  { icon: "bi-person-check", text: "Boost confidence in tackling challenging subjects", color: "warning" },
  { icon: "bi-globe", text: "Improve general knowledge and awareness", color: "info" },
  { icon: "bi-bar-chart-line", text: "Understand concepts through visual aids and experiments", color: "primary" },
  { icon: "bi-trophy", text: "Get ready for NTSE, Olympiads, and other competitive exams", color: "danger" },
  { icon: "bi-mic", text: "Enhance communication and presentation skills", color: "success" }
];

// For "Why Choose This Course?" Section (Class 8)
courseHighlights = [
  { icon: "bi-pencil-square", text: "Expert-curated study materials and notes", color: "primary" },
  { icon: "bi-tv", text: "Interactive video lectures with engaging animations", color: "success" },
  { icon: "bi-list-task", text: "Regular assignments and practice tests", color: "danger" },
  { icon: "bi-person-video3", text: "Live doubt-solving sessions with subject experts", color: "warning" },
  { icon: "bi-clock-history", text: "Self-paced learning with structured modules", color: "info" },
  { icon: "bi-journal-check", text: "Comprehensive revision and mock tests", color: "primary" },
  { icon: "bi-stars", text: "Success strategies from top educators", color: "danger" },
  { icon: "bi-people", text: "Collaborative learning with peer discussions", color: "success" }
];





  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const bus = document.querySelector('.bus') as HTMLElement;
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate movement percentage (0% at top, 100% at max scroll)
    const moveDistance = Math.min((scrollPosition / maxScroll) * 100, 100);
    
    // Move bus from left (start) to right (end)
    bus.style.transform = `translateX(${moveDistance}%)`;
  }
}