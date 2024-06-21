import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'lib-call-for-papers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './call-for-papers.component.html',
  styleUrl: './call-for-papers.component.css',
})
export class CallForPapersComponent {
  fg = new FormBuilder().nonNullable.group({
    name: '',
    email: '',
    text: ''
  })

  onSubmit() {
    if(confirm('Sicuro di voler procedere all\'invio?' )){
      this.fg.reset();
    }
  }
}
