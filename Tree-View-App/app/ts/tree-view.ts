import {Component, Input, OnInit} from 'angular2/core';
import {TreeNode} from './tree-node';
import {Store} from './store';
import {TreeNodeService} from './tree-node-service';
@Component({
    templateUrl: 'app/ts/tree-view.html',
    selector: 'tree-view',
    directives: [TreeView]
})

export class TreeView implements OnInit {

    @Input() root: TreeNode;
    children: any;
    items = [];
    subscription;

    constructor(private _store: Store, private _treeNodeService: TreeNodeService) {
    }

    ngOnInit() {
        debugger;
        this.subscription = this._store.getTreeNodes(this.root.key).subscribe(res => {
            this.items = res;
        });
        this._treeNodeService.loadTreeNodes(this.root);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}