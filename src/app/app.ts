import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MatIconModule } from '@angular/material/icon';
import { FirestoreService } from './core/services/firestore/firestore.service';
import { Stories } from './core/interfaces/stories.interface';



@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet,RouterLinkActive,RouterLink, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todisplay: Stories[] = [];
  addStory(newstory: Stories) {
    this.todisplay.push(newstory);
  }
  items: any[] = [];
   constructor() {
    
  }

  ngOnInit(): void {
  }
  // sprint:any[]=[];
  

  add() {
    // this.fs.addItem({ name: 'New Item ' + Math.random() });
  }
}
