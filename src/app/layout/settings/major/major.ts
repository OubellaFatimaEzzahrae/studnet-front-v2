import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-major',
  standalone: false,
  templateUrl: './major.html',
  styleUrl: './major.css'
})
export class Major {
  showDialog = false;  // formulaire caché par défaut
  selectedMajor: any = null;
  constructor(private router: Router) {}

  // ouvre le formulaire pour ajouter
  onAdd() {
    this.router.navigate(['/majors/add']); // redirige vers le formulaire d'ajout

    this.selectedMajor = null;  // pas de donnée, c’est un ajout
    this.showDialog = true;      // affiche le formulaire
  }

 // Sauvegarder
  onSave(major: any) {
    if (this.selectedMajor?.id) {
      // Si id existe, c'est une édition
      console.log('Édité :', major);
      // Ici, tu peux appeler ton API PUT /majors/:id
    } else {
      // Sinon, c'est un ajout
      console.log('Ajouté :', major);
      // Ici, tu peux appeler ton API POST /majors
    }

    this.showDialog = false; // ferme le formulaire
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
