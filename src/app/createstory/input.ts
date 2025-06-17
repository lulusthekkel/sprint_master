import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stories } from '../app';
import { StoryService } from '../story.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-input',
  imports: [FormsModule, MatSelectModule, MatFormFieldModule,],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {
  selectedValue: any;
  items1 = [{ label: 'High' },
  { label: 'Medium' },
  { label: 'Low' }];
  items2 = [{ label: 'Open' },
  { label: 'In progress' },
  { label: 'Done' }];
  name: string = '';
  status: string = '';
  severity: string = '';
  point: number | null = 0;
  description: string = '';
  scrums: { name: string; status: string; severity: string; point: number; description: string; }[] = [];

  constructor(private storyService: StoryService) { }

  addScrum() {
    if (this.name && this.point !== null && this.description) {
      const newStory: Stories = {
        name: this.name,
        status: this.status,
        severity: this.severity,
        point: this.point,
        description: this.description
      };
      this.storyService.addStory(newStory);


      this.name = '';
      this.status = '';
      this.severity = '';
      this.point = null;
      this.description = '';
    }

  }

}
