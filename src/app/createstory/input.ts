import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { StoryService } from '../core/services/story/story.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FirestoreService } from '../core/services/firestore/firestore.service';



@Component({
  selector: 'app-input',
  imports: [FormsModule, MatSelectModule, CommonModule, ReactiveFormsModule, MatIconModule, DialogModule, MatFormFieldModule],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {
  selectedValue: any;
  items1 = [{ label: 'High' },
  { label: 'Medium' },
  { label: 'Low' }];
  items2 = [{ label: 'Open', color: 'red' },
  { label: 'In progress', color: 'yellow' },
  { label: 'Done', color: 'green' }];
  name: string = '';
  status: string = '';
  severity: string = '';
  point: number | null = 0;
  description: string = '';
  scrums: { name: string; status: string; severity: string; point: number; description: string; }[] = [];
  storyForm: FormGroup;
  isSubmitted = false;

  constructor(private storyService: StoryService,
    private fb: FormBuilder, private fireStoreService:FirestoreService
  ) {
    this.storyForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      severity: ['', Validators.required],
      description: ['', Validators.required],
      point: ['', [Validators.required, oddNumberValidator()]],
    });
  }
  addScrum() {
    this.storyService.addStory(this.storyForm.value);
    this.fireStoreService.addItem(this.storyForm.value).then(()=> console.log('Mone pwolichu'));
  }
  dialogRef = inject(DialogRef);
  onSubmit() {
    if (this.storyForm.valid) {
      this.addScrum();
      this.dialogRef.close();
    }
    this.isSubmitted = true;
  }

}
 export function oddNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value !== null && value % 2 === 0) {
      return { oddNumber: true };
    }
    return null;
  };
}

