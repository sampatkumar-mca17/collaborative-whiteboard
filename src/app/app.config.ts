import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import {provideToastr} from 'ngx-toastr';
import { provideFirebaseApp, initializeApp, } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth'
import * as Sentry from "@sentry/angular";
import * as CONSTANTS from './constants'

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideToastr(),
   provideFirebaseApp(() => initializeApp(CONSTANTS.FIREBASE_CONFIG)) , provideFirestore(() => getFirestore()),
   provideAuth(() => getAuth()), {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },
  ]
};
