import { Component} from '@angular/core';
import { Createsprint } from '../createsprint/createsprint';
import { Dialog, DialogModule, } from '@angular/cdk/dialog';
import { Displaysprint } from '../displaysprint/displaysprint';
@Component({
  selector: 'app-sprint',
  imports: [Displaysprint],
  templateUrl: './sprint.html',
  styleUrl: './sprint.css'
})
export class Sprint {
  constructor(public dialog: Dialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(Createsprint, {
      width: '750px',
      height: '750px'

    });
  }
  
}
