import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stories } from '../../interfaces/stories.interface';
import { Sprint } from '../../interfaces/sprint.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { arrayUnion, doc, DocumentSnapshot, getDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  itemName: any;
  updateItem: any;

  constructor(private firestore: Firestore
  ) { }

  getItems(stories: any): Observable<any[]> {
    const itemsRef = collection(this.firestore, 'stories');
    return collectionData(itemsRef, { idField: 'id' }) as Observable<Stories[]>;
  }
  async getSingleStory(storyRef: string): Promise<Stories> {
    const sprintRef = doc(this.firestore, 'stories', storyRef);
    const sprintSnap = await getDoc(sprintRef);
    const storyData = sprintSnap.data() as Stories;
    return storyData
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
  getSprintItems(): Observable<any[]> {
    const sprintCollection = collection(this.firestore, 'sprints');
    return collectionData(sprintCollection, { idField: 'id' });
  }
  async addStoryToSprint(sprintId: string, storyId: string) {
    const sprintRef = doc(this.firestore, 'sprints', sprintId);
    const sprintSnap = await getDoc(sprintRef);

    if (!sprintSnap.exists()) {
      throw new Error('Sprint not found');
    }

    return updateDoc(sprintRef, {
      stories: arrayUnion(storyId)
    });
  }
  async getTotalPointsForSprint(sprintId: string): Promise<number> {
    const sprintRef = doc(this.firestore, 'sprints', sprintId);
    const sprintSnap = await getDoc(sprintRef);

    const sprintData = sprintSnap.data() as { stories?: string[] };

    if (!sprintData?.stories || sprintData.stories.length === 0) return 0;

    const storySnapshots = await Promise.all(
      sprintData.stories.map(storyId =>
        getDoc(doc(this.firestore, 'stories', storyId))
      )
    );

    const total = storySnapshots.reduce((sum, snap: DocumentSnapshot<any>) => {
      const data = snap.data();
      return sum + (data?.point ?? 0);
    }, 0);

    return total;
  }


}
