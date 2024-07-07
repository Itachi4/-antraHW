import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { CommonModule } from '@angular/common';
import { EditComponent } from "../edit/edit.component";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-display',
    standalone: true,
    templateUrl: './display.component.html',
    styleUrl: './display.component.css',
    imports: [CommonModule, EditComponent, FormsModule]
})
export class DisplayComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note | null = null;
  selectedIndex: boolean = false;
  currentId = -1;


  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  toggleContent(id:number) {

    this.currentId = id;
    this.selectedIndex = true;
  }

  onSelect(note: Note) {
    this.selectedNote = { ...note }; 
  }

  onDelete(id: number) {
    this.noteService.deleteNote(id);
  }

  onAdd() {
    this.selectedNote = { id: Date.now(), title: '', content: '' }; 
  }

  onSave(note: Note) {
    if (note.id === 0) {
      this.noteService.addNote(note);
    } else {
      this.noteService.updateNote(note);
    }
    this.selectedNote = null;  // Clear selection after save
  }

  onRevert() {
    this.selectedNote = null;
  }

}
