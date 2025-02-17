import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import this
import { FoundationComponent } from './foundation/foundation.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { MedicalComponent } from './medical/medical.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterModule, FoundationComponent, EngineeringComponent, MedicalComponent], // ✅ Add RouterModule
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent { }
