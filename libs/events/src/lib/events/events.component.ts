import {Component, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventFormComponent} from "../components/event-form/event-form.component";

@Component({
  selector: 'lib-events',
  standalone: true,
  imports: [CommonModule, EventFormComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit {
  events = signal<Array<{ name: string, date: string, speaker: string }>>([
    {
      name: "Respect the Boundaries: Pieno controllo delle dipendenze con Nx",
      date: "25/06/2024",
      speaker: "Federico Gambarino"
    },
    {
      name: "GraphQL, le Api su misura",
      date: "25/06/2024",
      speaker: "Giulio Alfieri"
    }
  ])
  isAdmin = signal(false);

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'yes') {
      this.isAdmin.set(true)
    }
  }

  handleSubmit($event: {name: string, date: string, speaker: string}) {
    this.events.update(e => [...e, $event])
  }
}
