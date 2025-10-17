import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-generic-list',
  standalone: true,
  templateUrl: './generic-list.html',
  styleUrls: ['./generic-list.css'],
  imports: [TableModule]

})
export class GenericList {
  items = [
    { nom: 'Dupont', prenom: 'Jean', anneeNaissance: 1998, filiere: 'Informatique' },
    { nom: 'Martin', prenom: 'Claire', anneeNaissance: 1999, filiere: 'Mathématiques' }
  ]
  onEditClick(item: any) {
    console.log('Modification de l\'élément :', item);
  }
  
}
