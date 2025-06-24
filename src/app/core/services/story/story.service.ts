import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { Stories } from '../../interfaces/stories.interface';
import { Firestore, updateDoc, doc,where,query, collection,collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storiesSource = new BehaviorSubject<Stories[]>([]);
  stories$ = this.storiesSource.asObservable();
  private currentStories: Stories[] = [];
  constructor(private firestore: Firestore) { }


  addStory(story: Stories) {
    this.currentStories.push(story);
    this.storiesSource.next(this.currentStories);

  }

  getStories(): Stories[] {
    return this.currentStories;
  }
  updateStory(data: Stories): Promise<void> {
    const storyDocRef = doc(this.firestore, `stories/${data.id}`);
    const { id, ...storyData } = data;
    return updateDoc(storyDocRef, storyData);
  }
  getStoriesBySprint(sprintId: string): Observable<any[]> {
    const storiesRef = collection(this.firestore, 'stories');
    const q = query(storiesRef, where('sprintId', '==', sprintId));
    return collectionData(q, { idField: 'id' });
  }

}
