import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'back-office';
}
