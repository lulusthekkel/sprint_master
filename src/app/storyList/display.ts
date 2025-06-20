import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Storycard } from '../storycard/storycard';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../core/services/story/story.service';
import { MatChipsModule } from '@angular/material/chips';
import { Stories } from '../core/interfaces/stories.interface';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { Subscriber } from 'rxjs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-display',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule,MatIcon],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display implements OnInit {
  stories: Stories[] = [];
  storyList: Stories[] = [];
  constructor(private storyService: StoryService,
    private fs: FirestoreService
  ) { }
  ngOnInit(): void {
    this.fs.getItems('stories').subscribe((data: Stories[]) => {
      this.storyList = data
    })

  }
}
