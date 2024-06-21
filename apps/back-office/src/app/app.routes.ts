import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'events',
    loadComponent: () => import('@angular-roma/events')
      .then(c => c.EventsComponent)
  },
  {
    path: 'sponsors',
    loadComponent: () => import('@angular-roma/sponsors')
      .then(c => c.SponsorsComponent)
  }
];
