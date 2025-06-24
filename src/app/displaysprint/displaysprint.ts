import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { CommonModule } from '@angular/common';
import { Sprint } from '../core/interfaces/sprint.interface';
import { Sprintservice } from '../core/services/sprint/sprintservice';
import { Timestamp } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Stories } from '../core/interfaces/stories.interface';
import { StoryService } from '../core/services/story/story.service';


@Component({
  selector: 'app-displaysprint',
  imports: [CommonModule],
  templateUrl: './displaysprint.html',
  styleUrl: './displaysprint.css'
})
export class Displaysprint implements OnInit {
  @Input() sprintId!: string;
  stories: Stories[] = [];
  Sprints: Sprint[] = [];
  sprintList: Sprint[] = [];
  constructor(private fs: FirestoreService,
    private sprintservice: Sprintservice, private storyService: StoryService) { }
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

    if (this.sprintId) {
      this.storyService.getStoriesBySprint(this.sprintId).subscribe(data => {
        this.stories = data;
      });
    }
  }


}

