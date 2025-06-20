import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc,getDocs  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stories } from '../../interfaces/stories.interface';
import { Sprint } from '../../../sprint/sprint';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  itemName: any;

   constructor(private firestore: Firestore) {}
  
  getItems(stories: any): Observable<any[]> {
    const itemsRef = collection(this.firestore, 'stories');
    return collectionData(itemsRef) as Observable<Stories[]>;
  }
  
   getSprintItems(sprint: any): Observable<any[]> {
    const itemsRef = collection(this.firestore, 'sprint');
    return collectionData(itemsRef) as Observable<Stories[]>;
  }
  
 

  async addItem(story: Stories) {
    if (story) {
      try {
        await addDoc(collection(this.firestore, 'stories'), story);
        console.log('Item added successfully!');
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
