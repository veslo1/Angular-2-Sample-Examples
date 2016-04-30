import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-about',
  templateUrl: 'app/ts/about.component.html'
})
export class AboutComponent {
  heading = "About Page";
}