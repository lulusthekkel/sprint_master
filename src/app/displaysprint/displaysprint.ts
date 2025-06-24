import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { CommonModule } from '@angular/common';
import { Sprint } from '../core/interfaces/sprint.interface';
import { Sprintservice } from '../core/services/sprint/sprintservice';
import { Timestamp } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { StoryService } from '../core/services/story/story.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-displaysprint',
  imports: [CommonModule],
  templateUrl: './displaysprint.html',
  styleUrl: './displaysprint.css'
})
export class Displaysprint implements OnInit {
  Sprints: any[] = [];
  sprintList: Sprint[] = [];
  constructor(private fs: FirestoreService) { }
  sprints: Sprint[] = [];
  sprintPoints: { [sprintId: string]: number } = {};

  ngOnInit(): void {
    this.fs.getSprintItems().pipe(
      map((sprints: Sprint[]) => {
        sprints.forEach((val) => {
          val.startdate = (val.startdate as unknown as Timestamp).toDate();
          val.enddate = (val.enddate as unknown as Timestamp).toDate();
        })
        return sprints;
      })).subscribe((data: Sprint[]) => {
        this.sprintList = data;
        console.log(this.sprintList);
        this.sprintList.forEach(sprint=> {
          if(sprint.stories?.length > 0) {
            sprint.stories.forEach(async story=> {
              const storyData = await this.fs.getSingleStory(story);
              if(storyData) {
                sprint.total = (sprint.total || 0) + storyData.point;
              }
            })
          }
        })
      })
    // this.afs.collection('sprints').snapshotChanges().subscribe(snapshots => {
    //   this.sprints = snapshots.map(snap => {
    //     const data = snap.payload.doc.data() as Sprint;
    //     const id = snap.payload.doc.id;
    //     this.fetchSprintPoints(id);
    //     return { ...data, id  };
    //   });
    // });
  }

  fetchSprintPoints(sprintId: string) {
    this.fs.getTotalPointsForSprint(sprintId).then(total => {
      this.sprintPoints[sprintId] = total;
    });

  }

}

