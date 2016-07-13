"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var checkbox_component_1 = require('./checkbox.component');
var SettingsComponent = (function () {
    function SettingsComponent() {
        this.settingsData = [
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
    }
    SettingsComponent.prototype.toggleSetting = function (setting) {
        var selectedSetting = _.find(this.settingsData, setting);
        selectedSetting.isActive = !selectedSetting.isActive;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'sb-settings',
            templateUrl: 'app/settings.component.html',
            styleUrls: ['app/settings.component.css'],
            directives: [checkbox_component_1.CheckboxComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map