import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { ArticlesComponent } from './articles.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/settings']" routerLinkActive="active">Settings</a>
      <a [routerLink]="['/articles']">Articles</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, SettingsComponent, ArticlesComponent]
})
export class AppComponent {
  title = 'Checkbox Demo';
}
