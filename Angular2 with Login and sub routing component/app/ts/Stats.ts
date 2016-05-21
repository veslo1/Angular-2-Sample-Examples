import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'user-stats',
  template: `
      User Stats: {{ id }}
  `
})
export class Stats {
  id:string;
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
}