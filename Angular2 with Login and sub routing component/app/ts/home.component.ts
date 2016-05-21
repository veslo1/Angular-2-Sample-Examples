import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersHome} from './UsersHome';
import {Stats} from './Stats';

@Component({
  template: `
  Home Page<br>
  <a [routerLink]="['./Home1']">Profile</a> |
  <a [routerLink]="['./Stats', {id: 1234}]">Stats</a><br>
  <br><br>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', component: UsersHome, name: 'Home1' },
  { path: '/:id/stats', component: Stats, name: 'Stats' }
])

export class HomeComponent {
}