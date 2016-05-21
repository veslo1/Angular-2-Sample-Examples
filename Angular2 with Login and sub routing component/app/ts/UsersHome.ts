import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'users-home',
  template: `User Home: ok`
})
export class UsersHome {
  constructor(params: RouteParams) {
     
  }
}