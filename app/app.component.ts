import { Component, Output, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { ArticlesComponent } from './articles.component';
import { ContactModalComponent } from './contact-modal.component';


@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, SettingsComponent, ArticlesComponent, ContactModalComponent],
  precompile: [SettingsComponent, ArticlesComponent, ContactModalComponent],

})
export class AppComponent {

  contactModal = false;

  showContactModal(){
    this.contactModal = true;
  }

}
