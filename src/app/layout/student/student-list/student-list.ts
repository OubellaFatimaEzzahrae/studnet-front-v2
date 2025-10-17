import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../shared/model/student.model';
import { StudentService } from '../../../shared/service/student/student.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  @Output() edit = new EventEmitter<Student>(); 

  students: Student[] = [];              
  
  constructor(private studentService: StudentService) {}

    ngOnInit() {
    this.loadStudents();
  }
  loadStudents() {
    this.studentService.getAll().subscribe({
      next: (data) => this.students = data,
      error: (err) => console.error('Erreur de chargement des filières', err)
    });
  }

    // quand on clique sur le crayon
  onEditClick(student: Student) {
    console.log('Modification de l\'étudiant avec id :', student.id);
    this.edit.emit(student);
  }
  
  onDeleteClick(student: any) {
    if (confirm(`Voulez-vous vraiment supprimer la filière ${student.id} ?`)) {
      this.onDelete(student.id); // on remonte l'id au parent
    }
  }

  onDelete(id: number) {
    this.studentService.delete(id).subscribe({
    next: () => {
      this.loadStudents();
    },
    error: (err) => {
      console.error('Erreur suppression', err);
      alert('Erreur lors de la suppression de la filière.');}
  });
}


}
