import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'sb-settings',
  templateUrl: 'app/settings.component.html',
  styleUrls: ['app/settings.component.css'],
  directives: [CheckboxComponent]
})
export class SettingsComponent {
  settingsData = [
    {
       name: 'protein_viewer',
       isActive: true
    },
    {
       name: 'variant_explorer',
       isActive: true
    },
    {
       name: 'can_manage_depositories',
       isActive: false
    },
    {
       name: 'blacklist',
       isActive: false
    },
  ];

  toggleSetting(setting){
    let selectedSetting = _.find(this.settingsData, setting)
    selectedSetting.isActive = !selectedSetting.isActive;
  }




}