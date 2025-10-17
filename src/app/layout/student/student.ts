import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../shared/service/student/student.service';
import { StudentList } from './student-list/student-list';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  @ViewChild(StudentList) listComponent!: StudentList;
  showDialog = false;  // formulaire caché par défaut
  selectedStudent: any = null;
  constructor(private router: Router, private studentService: StudentService) {}

  // ouvre le formulaire pour ajouter
  onAdd() {
    this.selectedStudent = null;  // pas de donnée, c’est un ajout
    this.showDialog = true; 
    console.log('Ajout d\'un nouvel étudiant: ', this.showDialog);
  }

  // Sauvegarde
  onSave(student: any) {
    if (this.selectedStudent) {
      // édition
      console.log('Mise à jour de l\'étudiant: ', student);
      this.studentService.update(this.selectedStudent.id, student).subscribe({
          next: () => {
              this.showDialog = false;   // ferme le formulaire
              this.listComponent.loadStudents(); // recharge la liste
      },
      error: (err) => console.error(err)
    });
    } else {
      // ajout
      this.studentService.create(student).subscribe({
        next: () => {
          this.showDialog = false; // ferme le formulaire
          this.listComponent.loadStudents()
        },
        error: (err) => console.error(err)
      });
    }
  }

  // Éditer une filière existante
  onEdit(student: any) {
    this.router.navigate(['/students/edit', student.id]);
    this.selectedStudent = { ...student }; // copie de l'étudiant à éditer
    this.showDialog = true;            // ouvre le dialogue
  }
  

  // annule et ferme le formulaire
  onCancel() {
    this.showDialog = false;
  }
}
