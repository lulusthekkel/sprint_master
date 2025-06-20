import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs'
import { Stories } from '../../interfaces/stories.interface';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storiesSource = new BehaviorSubject<Stories[]>([]);
  stories$ = this.storiesSource.asObservable();
  private currentStories: Stories[] = [];
  addStory(story: Stories) {
    this.currentStories.push(story);
    this.storiesSource.next(this.currentStories);
    
  }

  getStories(): Stories[] {
    return this.currentStories;
  }
  get storyList() {
    return this.currentStories;
  }

}
