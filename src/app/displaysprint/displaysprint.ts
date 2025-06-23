import { Component } from '@angular/core';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { CommonModule } from '@angular/common';
import { Sprint } from '../core/interfaces/sprint.interface';
import { Sprintservice } from '../core/services/sprint/sprintservice';
import { Timestamp } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-displaysprint',
  imports: [CommonModule],
  templateUrl: './displaysprint.html',
  styleUrl: './displaysprint.css'
})
export class Displaysprint {
  Sprints: Sprint[] = [];
  sprintList: Sprint[] = [];
  constructor(private fs: FirestoreService,
    private sprintservice: Sprintservice) { }
  ngOnInit(): void {
    this.fs.getSprintItems('sprints').pipe(
      map((sprints: Sprint[]) => {
        sprints.forEach((val) => {
          val.startdate = (val.startdate as unknown as Timestamp).toDate();
          val.enddate = (val.enddate as unknown as Timestamp).toDate();
        })
        return sprints;
      })).subscribe((data: Sprint[]) => {
        this.sprintList = data
      })
    this.Sprints = this.sprintservice.getSprint();
  }
}

