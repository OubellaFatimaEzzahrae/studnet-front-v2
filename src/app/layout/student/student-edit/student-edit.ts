import { Component, EventEmitter, Input, Output, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MajorService } from '../../../shared/service/major/major.service';
import { Major } from '../../../shared/model/major.model';
import { Student } from '../../../shared/model/student.model';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css'
})
export class StudentEdit implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() student: Student | null = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  majors: Major[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder, private majorService: MajorService) {}

  ngOnInit() {
    // 1. Créer le formulaire avec TOUS les champs nécessaires
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      major: [null, Validators.required]
    });

    // 2. Charger les filières
    this.loadMajors(); 

  }

  // Détecte quand "student" ou "visible" change
  ngOnChanges(changes: SimpleChanges): void {
    // Vérifier que le form existe avant de faire patchValue
    if (!this.form) return;

    if (changes['student']) {
      if (this.student) {
        // Mode édition : remplir le formulaire
        this.form.patchValue({
          firstName: this.student.firstName,
          lastName: this.student.lastName,
          birthday: this.student.birthday,
          major: this.student.major
        });
      } else {
        // Mode ajout : réinitialiser le formulaire
        this.form.reset();
      }
    }
  }

  onSave() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        id: this.student?.id, // Inclure l'ID si c'est une modification
        major: { id: this.form.value.major } // 🔥 ici la correction !

      };
      this.save.emit(formData);
      this.form.reset(); // Reset après sauvegarde
    }
  }

  onCancel() {
    this.form.reset();
    this.cancel.emit();
  }

  // Charge la liste des filières depuis l'API
  loadMajors() {
    this.majorService.getAll().subscribe({
      next: (data) => this.majors = data,
      error: (err) => console.error('Erreur de chargement des filières', err)
    });
  }
}