import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from '../core/services/firestore/firestore.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-createsprint',
  imports: [FormsModule, MatSelectModule, CommonModule, ReactiveFormsModule, MatIconModule, DialogModule, MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,MatInputModule,],
  templateUrl: './createsprint.html',
  styleUrl: './createsprint.css'
})
export class Createsprint {
  name: string = '';
  goal: string = '';
  startdate: Date = new Date();
  enddate: Date = new Date();
  target: number | null = 0;

  sprints: { name: string; goal: string; startdate: Date; enddate: Date; target: number; }[] = [];
  sprintForm: FormGroup;
  isSubmitted = true

  constructor(private fb: FormBuilder, private fireStoreSerivce: FirestoreService) {
    this.sprintForm = this.fb.group({
      name: ['', Validators.required],
      goal: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      target: ['', [Validators.required]],
    });
  }

  addSprint() {
     this.fireStoreSerivce.addSprintItem(this.sprintForm.value)
  }
  dialogRef = inject(DialogRef);
  onSubmit() {
    if (this.sprintForm.valid) {
      this.addSprint();
      this.dialogRef.close();
    }
    this.isSubmitted = true;
  }

}
