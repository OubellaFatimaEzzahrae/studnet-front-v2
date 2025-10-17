import { Component, EventEmitter, Output } from '@angular/core';
import { Major } from '../../../../shared/model/major.model';
import { MajorService } from '../../../../shared/service/major/major.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  @Output() edit = new EventEmitter<Major>();  // événement pour Major

  majors: Major[] = [];               // liste des filières
  
  //le constructeur serve à injecter le service MajorService 
  constructor(private majorService: MajorService) {}

    ngOnInit() {
    this.loadMajors();
  }
    // charge la liste des filières depuis l'API 
  loadMajors() {
    this.majorService.getAll().subscribe({
      next: (data) => this.majors = data,
      error: (err) => console.error('Erreur de chargement des filières', err)
    });
  }

    // quand on clique sur le crayon
  onEditClick(major: Major) {
    this.edit.emit(major);
  }
  
  onDeleteClick(major: any) {
    if (confirm(`Voulez-vous vraiment supprimer la filière ${major.code} ?`)) {
      this.onDelete(major.id); // on remonte l'id au parent (MajorComponent)
    }
  }

  onDelete(id: number) {
    this.majorService.delete(id).subscribe({
    next: () => {
      this.loadMajors(); // recharge la liste après suppression
    },
    error: (err) => {
      console.error('Erreur suppression', err);
      alert('Erreur lors de la suppression de la filière.');}
  });
}


}
