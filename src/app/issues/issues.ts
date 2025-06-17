import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from '../createstory/input';
import { StoryService } from '../story.service';
import { Display } from '../storyList/display';

@Component({
  selector: 'app-issues',
  imports: [MatDialogModule,Display],
  templateUrl: './issues.html',
  styleUrl: './issues.css'
})
export class Issues {
  constructor(public dialog: MatDialog) {}

        openDialog() {
          const dialogRef = this.dialog.open(InputComponent, {
              width: '950px',
              height:'750px' 
      
          });
        }

      
}

