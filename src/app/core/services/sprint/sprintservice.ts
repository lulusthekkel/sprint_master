import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs'
import { Sprint } from '../../interfaces/sprint.interface';

@Injectable({
  providedIn: 'root'
})
export class Sprintservice {
  private sprintSource = new BehaviorSubject<Sprint[]>([]);
    sprint$ = this.sprintSource.asObservable();
    private currentSprint: Sprint[] = [];

    addSprint(sprint: Sprint) {
      this.currentSprint.push(sprint);
      this.sprintSource.next(this.currentSprint);
      
    }
  constructor() { }
}
