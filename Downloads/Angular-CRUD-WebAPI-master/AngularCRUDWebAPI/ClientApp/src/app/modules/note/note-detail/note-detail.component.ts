import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { INote } from '../models/INote.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: INote;
  id: number = 0;
  noteForm: FormGroup; //reprents the form that is displayed.

    constructor(private service: NoteService, private route: ActivatedRoute, 
        private location: Location, private fb: FormBuilder, private router:Router,
        public snackBar: MatSnackBar) {
    this.note = <INote>{};
    this.noteForm = fb.group({
      'id': [this.note.id],
      'coordinateX': [this.note.coordinateX,],
      'coordinateY': [this.note.coordinateY],
      'noteText': [this.note.noteText],

    });
  }

  ngOnInit() {
    this.note = <INote>{};
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        return;
      }
      this.getNote(this.id);
    });

  }

  getNote(id: number) {
    this.service.getNote(id).subscribe(note => {
      this.note = note;
      this.noteForm.controls['id'].setValue(this.note.id);
      this.noteForm.controls['coordinateX'].setValue(this.note.coordinateX);
      this.noteForm.controls['coordinateY'].setValue(this.note.coordinateY);
      this.noteForm.controls['noteText'].setValue(this.note.noteText);
    })
  }

  onSubmit() {
    //this.note.id = this.noteForm.controls['id'].value;
    this.note.coordinateX = this.noteForm.controls['coordinateX'].value;
    this.note.coordinateY = this.noteForm.controls['coordinateY'].value;
    this.note.noteText = this.noteForm.controls['noteText'].value;
     
    if (!this.id) {
      this.service.createNote(this.note).subscribe(note => {
          this.note = note;
          this.router.navigate(['notes']);
      })
    } else
    {
      this.service.updateNote(this.id, this.note).subscribe(note => {
        console.log("Updated " + this.id);
          this.note = note;
          this.openSnackBar("Saved", "Success");
      });
    }
  }

   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
