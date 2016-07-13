import { provideRouter, RouterConfig }  from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ArticlesComponent } from './articles.component';

const routes: RouterConfig = [
  {
    path: 'settings',
    component: SettingsComponent
  },{
    path: 'articles',
    component: ArticlesComponent
  },{
    path: '',
    redirectTo: '/settings',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
