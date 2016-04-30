import {Component} from 'angular2/core';
import {Router } from 'angular2/router';
import {TreeView} from './tree-view';
import {TreeNode} from './tree-node';
import {Store} from './store';
import {TreeNodeService} from './tree-node-service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    template: `<h1>Dummy Tree</h1><tree-view [root]="node"></tree-view>`,
    directives: [TreeView],
    providers: [Store, TreeNodeService, HTTP_PROVIDERS]
})

export class OtherComponent {
    node: TreeNode = null;

    ngOnInit() {
        this.node = new TreeNode('root', '../../tree-view-data/countries.json', '');
    }
}