import { Component, Input,OnInit} from '@angular/core';
import { Stories } from '../app';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { StoryService } from '../story.service';


@Component({
  selector: 'app-storycard',
  imports: [MatCardModule,MatButtonModule,MatChipsModule,CommonModule],
  templateUrl: './storycard.html',
  styleUrl: './storycard.css',
})
export class Storycard implements OnInit {
  @Input() storys:Stories | undefined
  stories: Stories[] = [];
  story: any; 

constructor(private storyService: StoryService) {}

ngOnInit() {
  this.stories = this.storyService.getStories(); 
  // this.story = this.stories;

}

  
}
