import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="btnClick.emit()">{{ title() }}</button>`,
  styles: `
    button {
      color: white;
      background: darkred;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  title = input.required<string>()
  btnClick = output<void>()
}
