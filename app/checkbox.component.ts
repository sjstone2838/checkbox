import {Component, Input} from '@angular/core';

@Component({
  selector: 'sb-checkbox',
  templateUrl: 'app/checkbox.component.html',
  styleUrls: ['app/checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() selected;

  toggle(){
      this.selected.isActive = !this.selected.isActive;
  }

}