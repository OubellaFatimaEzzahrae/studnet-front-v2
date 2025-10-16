import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
   @Output() edit = new EventEmitter<any>();  // événement pour Major
  majors = [
    { id: 1, code: 'Computer Science', description: 'Study of computers and computational systems' },
    { id: 2, code: 'Mathematics', description: 'Study of numbers, shapes, and patterns' },
    { id: 3, code: 'Physics', description: 'Study of matter, energy, and the fundamental forces of nature' },
    { id: 4, code: 'Chemistry', description: 'Study of substances, their properties, and reactions' },
    { id: 5, code: 'Biology', description: 'Study of living organisms and their interactions' }
  ];
    // quand on clique sur le crayon
  onEditClick(major: any) {
    console.log("Édition de la filière :", major);
    this.edit.emit(major);  // remonte à Major
  }

}
