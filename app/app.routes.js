"use strict";
var router_1 = require('@angular/router');
var settings_component_1 = require('./settings.component');
var articles_component_1 = require('./articles.component');
var routes = [
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    }, {
        path: 'articles',
        component: articles_component_1.ArticlesComponent
    }, {
        path: '',
        redirectTo: '/settings',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map