import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NoteComponent } from './note.component';
import { NoteService } from './note.service';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    //FormBuilder,
    ReactiveFormsModule,
    //Validators,
    MaterialModule
  ],
  declarations: [NoteComponent, NoteDetailComponent],
  providers: [NoteService],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //FormBuilder,
    //Validators,
    MaterialModule]
})
export class NoteModule { }
