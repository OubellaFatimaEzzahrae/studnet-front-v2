import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ActionButton } from '../../../layout/instructor/instructor';
import { ButtonModule } from 'primeng/button';

export interface StructuredField {
  field: string,
  type: 'string' | 'object' | 'date',
  child?: string
}


@Component({
  selector: 'app-generic-list',
  standalone: true,
  templateUrl: './generic-list.html',
  styleUrls: ['./generic-list.css'],
  imports: [TableModule, ButtonModule]

})


export class GenericList {
  @Input() headers: any[] = [];
  @Input() data: any[] = [];
  @Input() structureField: StructuredField[] = [];

  @Input() actions: ActionButton[] = []; // Boutons configurables
  @Input() showActions: boolean = true; // Afficher ou non la colonne actions
  
  @Output() onAction = new EventEmitter<{action: string, item: any}>();

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  handleAction(action: string, item: any) {
    this.onAction.emit({ action, item });
  }
}
