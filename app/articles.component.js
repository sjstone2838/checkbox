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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var _ = require('lodash');
var checkbox_component_1 = require('./checkbox.component');
var utils_component_1 = require('./utils.component');
var ArticlesComponent = (function () {
    function ArticlesComponent(http, utils) {
        this.http = http;
        this.utils = utils;
        this.totalRead = 0;
        this.searchTerm = 'john';
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://api.solvebio.com/v1/articles')
            .toPromise()
            .then(function (response) {
            _this.articles = response.json().data;
            _this.makeCheckboxReady(_this.articles);
        })
            .catch(this.handleError);
    };
    // TODO: redundant vs. settings.component.ts
    ArticlesComponent.prototype.handleError = function (error) {
        console.log('Sorry, an error occurred', error);
        return Promise.reject(error.message || error);
    };
    // append 'isActive' property if it doesn't already exist
    ArticlesComponent.prototype.makeCheckboxReady = function (data) {
        _.forEach(data, function (item) {
            if (!item.isActive) {
                item.isActive = false;
            }
        });
    };
    ArticlesComponent.prototype.manageTotalRead = function (article) {
        this.totalRead += article.isActive ? 1 : -1;
    };
    ArticlesComponent.prototype.setProperSearchTerm = function () {
        this.properSearchTerm = this.utils.proper(this.searchTerm || 'searchTerm');
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'sb-articles',
            templateUrl: 'app/articles.component.html',
            styleUrls: ['app/articles.component.css'],
            directives: [checkbox_component_1.CheckboxComponent],
            providers: [utils_component_1.Utils]
        }), 
        __metadata('design:paramtypes', [http_1.Http, utils_component_1.Utils])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map