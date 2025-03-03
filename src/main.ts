import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import * as AOS from 'aos';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; 

AOS.init();

bootstrapApplication(AppComponent, {
  providers: [

    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ],

});
