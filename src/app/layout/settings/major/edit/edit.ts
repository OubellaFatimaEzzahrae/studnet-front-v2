import { Component, EventEmitter, input, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  /**@Input() Communication Parent => Enfant */
  @Input() visible = false;          // contrôle la visibilité du dialogue
  @Input() major: any = null;        // données de la filière à éditer
  input1 = input('');
  /**@Output() Communication Enfant => Parent */
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      code: ['', Validators.required],
      description: ['']
    });

    if (this.major) {
      this.form.patchValue(this.major);
    }
  }
    // détecte quand "major" change (quand on ouvre le dialogue en mode edit)
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['major'] && this.major) {
      this.form.patchValue({
        code: this.major.code,
        description: this.major.description,
      });
    } else if (changes['major'] && !this.major) {
      // si on passe en mode ajout → on reset le form
      this.form.reset();
    }
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
