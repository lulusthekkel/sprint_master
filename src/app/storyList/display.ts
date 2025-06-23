import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../core/services/story/story.service';
import { MatChipsModule } from '@angular/material/chips';
import { Stories } from '../core/interfaces/stories.interface';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { MatIcon } from '@angular/material/icon';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Editstory } from '../editstory/editstory';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-display',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIcon, ReactiveFormsModule, MatFormFieldModule,],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display implements OnInit {
  stories: Stories[] = [];
  storyList: Stories[] = [];


  constructor(private storyService: StoryService,
    private fs: FirestoreService, private dialog: MatDialog, private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fs.getItems('stories').subscribe((data: Stories[]) => {
      this.storyList = data
      console.log(data);

    })


  }
  openDialog(story: Stories) {
    const dialogRef = this.dialog.open(Editstory, {
      width: '750px',
      height: '700px',
      data: story
    });
    console.log(story);


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updateData = { ...story, ...result }
        const {id} = updateData;
        this.storyService.updateStory(id);
        this.storyService.updateStory(updateData).then(() => {
          alert('Story updated!');
        });
      }
    });

  }

}


