import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "@angular-roma/ui-kit";
import {
  FancyBackgroundComponent
} from "@angular-roma/ui-kit";

@Component({
  selector: 'lib-call-for-papers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, FancyBackgroundComponent],
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
