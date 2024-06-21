import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "@angular-roma/ui-kit";
import {
  FancyBackgroundComponent
} from "@angular-roma/ui-kit";

@Component({
  selector: 'lib-sponsors',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, FancyBackgroundComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css',
})
export class SponsorsComponent {
  fg = new FormBuilder().nonNullable.group({
    name: '',
    beer: false
  })

  onSubmit() {
    if (this.fg.value.beer) {
      alert('Approvato!');
      this.fg.reset();
    } else {
      alert('Pensiamoci su');
    }
  }

}
