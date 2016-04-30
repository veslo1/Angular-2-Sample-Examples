import {Component} from 'angular2/core';
import {Router } from 'angular2/router';
import {Tree_View} from './tree_view';
import {Tree_Node} from './tree_node';
import {Api_Wrapper} from './api_wrapper';
import {Tree_Node_Service} from './tree_node_service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    templateUrl: 'app/ts/site.view.html',
    directives: [Tree_View],
    providers: [Api_Wrapper, Tree_Node_Service, HTTP_PROVIDERS]
})

export class SiteView_Component {
    node: Tree_Node = null;
    displayValue: any = null;
    ngOnInit() {
        this.node = new Tree_Node("SiteId", "64909fee-e52e-4051-8277-8ba2101e743b", 0);
    }
}