import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'events',
    loadComponent: () => import('@angular-roma/events')
      .then(c => c.EventsComponent)
  },
  {
    path: 'call-for-papers',
    loadComponent: () => import('@angular-roma/call-for-papers')
      .then(c => c.CallForPapersComponent)
  }
];
