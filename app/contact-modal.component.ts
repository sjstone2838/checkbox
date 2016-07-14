import { Component, Input, OnInit, DoCheck, Renderer, ElementRef, OnDestroy} from '@angular/core';

import * as _ from 'lodash';

import { ModalDialogComponent } from './modal-dialog.component';
import { Utils } from './utils.component';


@Component({
  selector: 'contact-modal',
  templateUrl: 'app/contact-modal.component.html',
  // styleUrls: ['app/modal-dialog.component.css'],
  directives: [ModalDialogComponent],
  providers: [Utils],
})
export class ContactModalComponent {
  @Input() show;
  // @Input() hasError;
  // @Input() formCtrl;
  @Input() loading;

}