import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync()
    ,
    provideHttpClient()  // Cấu hình routing ở đây, không phải trong component
  ]
});