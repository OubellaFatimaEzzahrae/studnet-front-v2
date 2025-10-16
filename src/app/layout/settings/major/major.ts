import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MajorService } from '../../../shared/service/major.service';
import { List } from './list/list';

@Component({
  selector: 'app-major',
  standalone: false,
  templateUrl: './major.html',
  styleUrl: './major.css'
})
export class Major {
  @ViewChild(List) listComponent!: List;
  showDialog = false;  // formulaire caché par défaut
  selectedMajor: any = null;
  constructor(private router: Router, private majorService: MajorService) {}

  // ouvre le formulaire pour ajouter
  onAdd() {
    this.router.navigate(['/majors/add']); // redirige vers le formulaire d'ajout

    this.selectedMajor = null;  // pas de donnée, c’est un ajout
    this.showDialog = true;      // affiche le formulaire
  }

  // Sauvegarde
  onSave(major: any) {
    if (this.selectedMajor) {
      // édition
       this.majorService.update(this.selectedMajor.id, major).subscribe({
      next: () => {
        this.showDialog = false;   // ferme le formulaire
        this.listComponent.loadMajors(); // recharge la liste
      },
      error: (err) => console.error(err)
    });
    } else {
      // ajout
      this.majorService.create(major).subscribe({
        next: () => {
          this.showDialog = false; // ferme le formulaire
          this.listComponent.loadMajors()
        },
        error: (err) => console.error(err)
      });
    }
  }

  // Éditer une filière existante
  onEdit(major: any) {
    this.router.navigate(['/majors/edit', major.id]);
    this.selectedMajor = { ...major }; // copie de la filière à éditer
    this.showDialog = true;            // ouvre le dialogue
  }
  

  // annule et ferme le formulaire
  onCancel() {
    this.showDialog = false;
  }
}
