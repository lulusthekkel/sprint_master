import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs'
import { Sprint } from '../../interfaces/sprint.interface';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class Sprintservice {
  private sprintSource = new BehaviorSubject<Sprint[]>([]);
  sprint$ = this.sprintSource.asObservable();
  private currentSprint: Sprint[] = [];
  constructor() { }

  addSprint(sprint: Sprint) {
    this.currentSprint.push(sprint);
    this.sprintSource.next(this.currentSprint);

  }
  getSprint(): Sprint[] {
    return this.currentSprint;
  }
  getsprintList() {
    return this.currentSprint;
  }
  
  
}

