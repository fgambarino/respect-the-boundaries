import {Component, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "@angular-roma/ui-kit";

@Component({
  selector: 'lib-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css',
})
export class EventFormComponent {
  fg = new FormBuilder().nonNullable.group({
    name: '', date: '', speaker: ''
  })

  eventSubmit = output<{ name: string, date: string, speaker: string }>()

  onSubmit() {
    const {name, date, speaker} = this.fg.controls;

    this.eventSubmit.emit(
      {
        name: name.value,
        date: date.value,
        speaker: speaker.value
      }
    );
    this.fg.reset();
  }
}
