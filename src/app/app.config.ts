import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBUUmUL5kOj_bFUqAQJQdZUl64rkFlbkfY",
  authDomain: "my-scrum-project-d8e88.firebaseapp.com",
  projectId: "my-scrum-project-d8e88",
  storageBucket: "my-scrum-project-d8e88.firebasestorage.app",
  messagingSenderId: "100322259212",
  appId: "1:100322259212:web:53b0f67497ebacdc9b5929"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
