import { Component } from '@angular/core';
import { RandomPersonListComponent } from './components/random-person-list/random-person-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomPersonListComponent], // Asegúrate de que esto esté correcto
  template: `<app-random-person-list></app-random-person-list>`,
})
export class AppComponent {}


