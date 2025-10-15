import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  majors = [
    { id: 1, name: 'Computer Science', description: 'Study of computers and computational systems' },
    { id: 2, name: 'Mathematics', description: 'Study of numbers, shapes, and patterns' },
    { id: 3, name: 'Physics', description: 'Study of matter, energy, and the fundamental forces of nature' },
    { id: 4, name: 'Chemistry', description: 'Study of substances, their properties, and reactions' },
    { id: 5, name: 'Biology', description: 'Study of living organisms and their interactions' }
  ];

}
