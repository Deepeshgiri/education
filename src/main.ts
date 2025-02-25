import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import * as AOS from 'aos';

AOS.init();

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
  
});
