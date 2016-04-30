import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Route } from 'angular2/router';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { SiteView_Component } from './site_view_component';
import { AboutComponent } from './about.component';
import { OtherComponent } from './other.component';
import { HeroDetailComponent } from './hero-detail.component';

//  <a [routerLink]="['Dashboard']">Dashboard</a>
//        <a [routerLink]="['Heroes']">Dummy List</a>

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
       <a [routerLink]="['OtherPage']">Dummy Tree</a>
       <a [routerLink]="['PanelTreeView']">Site View</a>
       <a [routerLink]="['AboutPage']">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/ts/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    new Route({
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    }),
    new Route({
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }),
    new Route({
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    })
    ,
    new Route({
        path: '/panels',
        name: 'PanelTreeView',
        component: SiteView_Component
    })
    ,
    new Route({
        path: '/about',
        name: 'AboutPage',
        component: AboutComponent
    }),
    new Route({
        path: '/other',
        name: 'OtherPage',
        component: OtherComponent,
        useAsDefault: true
    })
])
export class AppComponent {
    title = 'RAMP UP POC';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/