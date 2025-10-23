import { Component } from '@angular/core';
import { GenericList, StructuredField } from '../../shared/components/generic-list/generic-list';

export interface ActionButton {
  icon: string;
  severity: 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast';
  tooltip: string;
  action: string; // identifiant de l'action
}



@Component({
  selector: 'app-instructor',
  standalone: true,
  templateUrl: './instructor.html',
  styleUrls: ['./instructor.css'],
  imports: [GenericList]
})
export class Instructor {
  headers = ['ID', 'Nom', 'Prénom', 'Année de Naissance', 'Filière', 'Actions'];
  studentStructure: StructuredField[] = [
    { field: 'id', type: 'string' },
    { field: 'nom', type: 'string' },
    { field: 'prenom', type: 'string' },
    { field: 'anneeNaissance', type: 'date' },
    { field: 'filiere', type: 'object', child: 'code' }
  ];

  data = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', anneeNaissance: 1998, filiere: { code: 'INFO', description: 'Informatique' } },
    { id: 2, nom: 'Martin', prenom: 'Claire', anneeNaissance: 1999, filiere: { code: 'MATH', description: 'Mathématiques' } }
  ];

 // Configuration des boutons
  actions: ActionButton[] = [
    { icon: 'pi pi-eye', severity: 'info', tooltip: 'Voir', action: 'view' },
    { icon: 'pi pi-pencil', severity: 'warning', tooltip: 'Modifier', action: 'edit' },
    { icon: 'pi pi-trash', severity: 'danger', tooltip: 'Supprimer', action: 'delete' }
  ];

  // Gestion unique de toutes les actions
  handleAction(event: {action: string, item: any}) {
    switch(event.action) {
      case 'view':
        this.handleView(event.item);
        break;
      case 'edit':
        this.handleEdit(event.item);
        break;
      case 'delete':
        this.handleDelete(event.item);
        break;
    }
  }

  handleView(item: any) {
    console.log('Voir:', item);
  }

  handleEdit(item: any) {
    console.log('Modifier:', item);
  }

  handleDelete(item: any) {
    console.log('Supprimer:', item);
    this.data = this.data.filter(d => d.id !== item.id);
  }

}