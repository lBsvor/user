import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NoteService } from './note.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material'
import { INote } from './models/INote.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteDetailComponent } from './note-detail/note-detail.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public notes: INote[];
  isWaiting: Boolean = false;
  
   displayedColumns: string[] = ['id', 'coordinateX', 'coordinateY', 'noteText'];

   constructor(private service: NoteService, private router:Router,
   @Optional() @Inject(MAT_DIALOG_DATA) public data, private dialog :MatDialog) 

 {
  
 }
  
  addNew(){
    const dialogRef = this.dialog.open( NoteDetailComponent,{
      width: '80%',
      height:'50%',
      closeOnNavigation: true 
    });

    this.router.navigate(['note']);
  }

  ngOnInit() {
    this.isWaiting = true;
    this.service.getNotes().subscribe(notes => {
      this.notes = notes;
      this.isWaiting = false;
    })
  }
  
   cancel() {
    this.router.navigate(['home']);
  }

}
