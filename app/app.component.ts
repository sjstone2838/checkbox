import { Component } from '@angular/core';
import { SettingsComponent } from './settings.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <sb-settings></sb-settings>
  `,
  directives: [SettingsComponent]
})
export class AppComponent {
  title = 'Checkbox Demo';
}
