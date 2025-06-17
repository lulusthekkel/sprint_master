import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Storycard } from '../storycard/storycard';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Stories } from '../app';
import { StoryService } from '../story.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-display',
  imports: [CommonModule, MatCardModule, MatButtonModule, Storycard, MatChipsModule],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display implements OnInit {
  stories: Stories[] = [];
  constructor(private storyService: StoryService) { }
  ngOnInit(): void {
    this.storyService.stories$.subscribe((data) => {
      this.stories = data;
    });
  }
  get storyList(): Stories[] {
    return this.storyService.storyList;
  }

}
