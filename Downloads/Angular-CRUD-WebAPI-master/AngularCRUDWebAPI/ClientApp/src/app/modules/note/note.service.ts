import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { INote } from './models/INote.model';
import { format } from 'url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class NoteService {

  

  constructor(private httpClient: HttpClient) {
  }

  getNotes(): Observable<INote[]> {
    let url = `/api/notes`;
   // return this.httpClient.get<INote[]>(url);
   let notes = new Array<INote>();
    notes.push({id:1, coordinateX:5454.545, coordinateY:2, noteText:'text...'});
    notes.push({id:2, coordinateX:45455.847584, coordinateY:2, noteText:'text...'});  
    notes.push({id:3, coordinateX:5454.641, coordinateY:2, noteText:'text...'});
    return Observable.create(notes) ;
}

  getNote(id: number): Observable<INote> {
    let url = `/api/notes/` + id;
    return this.httpClient.get<INote>(url);
  }

  updateNote(id: number, note: INote): Observable<INote> {
    let url = `/api/notes/` + id;
    return this.httpClient.put<INote>(url, note, httpOptions);
  }
  
  createNote(note: INote): Observable<INote> {
    let url = `/api/notes`
    return this.httpClient.post<INote>(url, note, httpOptions);
  }

}
