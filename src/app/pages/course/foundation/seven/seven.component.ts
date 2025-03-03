import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-seven',
  imports: [CommonModule],
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.scss']
})
export class SevenComponent {

  ngOnInit() {
 AOS.refresh();
 AOS.init();
  }

  courseTitle = "Master Class 7 with Expert Guidance";
  overviewText = "Unlock your potential with our comprehensive Class 7 online course. Designed to align with the latest CBSE/ICSE curriculum, this course offers interactive lessons, expert mentorship, and a wealth of resources to help you excel academically and beyond.";

  courseFeatures = [
    { icon: "video_library", title: "Engaging Video Lectures", description: "High-quality, interactive video lessons to make learning fun and effective.", color: "primary" },
    { icon: "groups", title: "Live Interactive Classes", description: "Join live sessions with expert mentors and peers for real-time learning.", color: "danger" },
    { icon: "schedule", title: "Flexible Learning", description: "Study at your own pace with 24/7 access to course materials.", color: "warning" },
    { icon: "auto_stories", title: "Comprehensive Resources", description: "Access detailed notes, practice questions, and reference materials.", color: "info" },
    { icon: "support_agent", title: "Personalized Support", description: "Get one-on-one doubt-solving sessions with experienced mentors.", color: "success" },
    { icon: "menu_book", title: "Extensive Library", description: "Explore a vast collection of books, notes, and study resources.", color: "secondary" }
  ];
  

  highlights = [
    { icon: "bi-book-half", text: "Complete coverage of CBSE/ICSE Class 7 syllabus", color: "primary" },
    { icon: "bi-lightbulb", text: "Develop mental aptitude for competitive exams", color: "success" },
    { icon: "bi-bar-chart-line", text: "Learn through graphical and 3D visualization", color: "danger" },
    { icon: "bi-bookmark-star", text: "Build strong conceptual understanding", color: "warning" },
    { icon: "bi-list-check", text: "Practice with MCQs, comprehensions, and more", color: "info" },
    { icon: "bi-trophy", text: "Prepare for Olympiads like NSO, IMO, and NSEJS", color: "primary" },
    { icon: "bi-arrow-up-right-circle", text: "Lay a strong foundation for higher studies", color: "danger" },
    { icon: "bi-mic", text: "Enhance English speaking and personality development", color: "success" }
  ];
}