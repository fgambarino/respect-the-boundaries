import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-fancy-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: lightsalmon">
      <ng-content/>
    </div>
  `,
  styles: ``,
})
export class FancyBackgroundComponent {}
