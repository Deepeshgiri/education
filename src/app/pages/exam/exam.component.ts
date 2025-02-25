import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'] // Fixed `styleUrl` to `styleUrls`
})
export class ExamComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      duration: 1000,  
      once: true,  // Ensures animations trigger only once for better UX
      mirror: false // Prevents animations from replaying when scrolling back up
    });
  }

  readonly syllabusList = [
    { class: 'VI', syllabusUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/6th_PTQE_Syllabus.pdf' },
    { class: 'VII', syllabusUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/7th_PTQE_Syllabus.pdf' },
    { class: 'VIII', syllabusUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/8th_PTQE_Syllabus.pdf' },
    { class: 'IX', syllabusUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/9th_PTQE_Syllabus.pdf' },
    { class: 'X', syllabusUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/10th_PTQE_Syllabus.pdf' }
  ];

  readonly samplePapersStage1 = [
    { class: 'VI', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_6th.pdf' },
    { class: 'VII', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_7th.pdf' },
    { class: 'VIII', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_8th.pdf' },
    { class: 'IX', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_9th.pdf' },
    { class: 'X', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_10th.pdf' }
  ];

  readonly samplePapersStage2 = [
    { class: 'VI', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_6thstage2.pdf' },
    { class: 'VII', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_7thstage2.pdf' },
    { class: 'VIII', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_8thstage2.pdf' },
    { class: 'IX', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_9thstage2.pdf' },
    { class: 'X', sampleUrl: 'https://www.pinnacloeducare.com/images/ptqe-2024/SamplePaper_10thstage2.pdf' }
  ];
}
