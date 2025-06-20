import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from '../createstory/input';
import { StoryService } from '../core/services/story/story.service';
import { Display } from '../storyList/display';
import { Dialog, DialogModule, } from '@angular/cdk/dialog';

@Component({
  selector: 'app-issues',
  imports: [DialogModule,Display],
  templateUrl: './issues.html',
  styleUrl: './issues.css'
})
export class Issues {
  constructor(public dialog: Dialog) {}

        openDialog() {
          const dialogRef = this.dialog.open(InputComponent, {
              width: '750px',
              height:'750px' 
      
          });
        }

      
}

