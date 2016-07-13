import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { ArticlesComponent } from './articles.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, SettingsComponent, ArticlesComponent],
  precompile: [SettingsComponent, ArticlesComponent]
})
export class AppComponent {
}
