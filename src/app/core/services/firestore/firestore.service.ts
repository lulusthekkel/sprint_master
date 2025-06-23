import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stories } from '../../interfaces/stories.interface';
import { Sprint } from '../../interfaces/sprint.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  itemName: any;
  updateItem: any;

  constructor(private firestore: Firestore) { }

  getItems(stories: any): Observable<any[]> {
    const itemsRef = collection(this.firestore, 'stories');
    return collectionData(itemsRef,{ idField: 'id' }) as Observable<Stories[]>;
  }

  getSprintItems(sprints: any): Observable<Sprint[]> {
    const itemsRef = collection(this.firestore, 'sprints');
    return collectionData(itemsRef) as Observable<Sprint[]>;
  }
  async addItem(story: Stories) {
    if (story) {
      try {
        await addDoc(collection(this.firestore, 'stories'), story);
        this.itemName = '';
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  }
  async addSprintItem(sprint: Sprint) {
    if (sprint) {
      try {
        await addDoc(collection(this.firestore, 'sprints'), sprint);
        console.log('Item added successfully!');
        this.itemName = '';
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  }


}
