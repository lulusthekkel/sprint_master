import { Component, inject, Inject, OnInit } from '@angular/core';
import { Stories } from '../core/interfaces/stories.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Sprintservice } from '../core/services/sprint/sprintservice';
import { FirestoreService } from '../core/services/firestore/firestore.service';
@Component({
  selector: 'app-editstory',
  imports: [MatFormFieldModule, CommonModule, FormsModule, MatSelectModule, MatInputModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './editstory.html',
  styleUrl: './editstory.css'
})
export class Editstory {
  editForm: FormGroup;
  sprints: any[] = [];
  dialogRef = inject(MatDialogRef<Editstory>);
  selectedValue: any;
  items1 = [{ label: 'High' },
  { label: 'Medium' },
  { label: 'Low' }];
  items2 = [{ label: 'Open', color: 'red' },
  { label: 'In progress', color: 'yellow' },
  { label: 'Done', color: 'green' }];


  constructor(private fb: FormBuilder, private sprintService: Sprintservice,
    @Inject(MAT_DIALOG_DATA) public data: Stories
  ) {
    console.log(this.data);

    this.editForm = this.fb.group({
      name: [data.name],
      description: [data.description],
      status: [data.status],
      severity: [data.severity],
      point: [data.point],
      sprint: [data.sprint || '']
    });
  }
  ngOnInit(): void {
    this.sprintService.getSprintItems().subscribe(sprints => {
      this.sprints = sprints;
    });
  }

  onSave() {
    this.dialogRef.close(this.editForm.value);
    console.log(this.editForm.value);

  }

  onCancel() {
    this.dialogRef.close();

  }



}
