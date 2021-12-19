import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './modules/note/note.component';
import { NoteDetailComponent } from './modules/note/note-detail/note-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'notes', component: NoteComponent },
  { path: 'notes/:id', component: NoteDetailComponent },
  { path: 'note', component: NoteComponent },

];

export const routing = RouterModule.forRoot(routes);
