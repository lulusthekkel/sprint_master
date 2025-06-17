
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';



export interface Stories {
  name: string;
  status: string;
  severity:string;
  point: number;
  description: string;

}

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todisplay: Stories[] = [];
  addStory(newstory: Stories) {
    this.todisplay.push(newstory);
  }
}
