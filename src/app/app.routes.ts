import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExamComponent } from './pages/exam/exam.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { CourseComponent } from './pages/course/course.component';
import { FoundationComponent } from './pages/course/foundation/foundation.component';
import { EngineeringComponent } from './pages/course/engineering/engineering.component';
import { MedicalComponent } from './pages/course/medical/medical.component';
import { SevenComponent } from './pages/course/foundation/seven/seven.component';
import { EightComponent } from './pages/course/foundation/eight/eight.component';
import { NineComponent } from './pages/course/foundation/nine/nine.component';
import { TenComponent } from './pages/course/foundation/ten/ten.component';
import { EnggelevenComponent } from './pages/course/engineering/enggeleven/enggeleven.component';
import { EnggtwelveComponent } from './pages/course/engineering/enggtwelve/enggtwelve.component';
import { MedtwelveComponent } from './pages/course/medical/medtwelve/medtwelve.component';
import { MedelevenComponent } from './pages/course/medical/medeleven/medeleven.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'course', component: CourseComponent },  
  { path: 'course/foundation', component: FoundationComponent },
  { path: 'course/engineering', component: EngineeringComponent },
  { path: 'course/medical', component: MedicalComponent },

  { path: 'course/foundation/seven', component: SevenComponent },
  { path: 'course/foundation/eight', component: EightComponent },
  { path: 'course/foundation/nine', component: NineComponent },
  { path: 'course/foundation/ten', component: TenComponent },


  { path: 'course/engineering/eleven', component: EnggelevenComponent },
  { path: 'course/engineering/twelve', component: EnggtwelveComponent },

  {path:'course/medical/eleven', component: MedelevenComponent},
  {path:'course/medical/twelve', component: MedtwelveComponent},






];
