import { Component } from '@angular/core';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { CommonModule } from '@angular/common';
import { Sprint } from '../core/interfaces/sprint.interface';

@Component({
  selector: 'app-displaysprint',
  imports: [CommonModule],
  templateUrl: './displaysprint.html',
  styleUrl: './displaysprint.css'
})
export class Displaysprint {
  Sprints: Sprint[] = [];
  sprintList: Sprint[] = [];
  constructor(private fs: FirestoreService) { }
  ngOnInit(): void {
    this.fs.getSprintItems('sprints').subscribe((data: Sprint[]) => {
      this.sprintList = data
    })

  }
}

