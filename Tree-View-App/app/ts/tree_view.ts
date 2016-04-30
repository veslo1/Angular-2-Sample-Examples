import {Component, Input, OnInit, EventEmitter} from 'angular2/core';
import {Tree_Node} from './tree_node';
import {Api_Wrapper} from './api_wrapper';
import {Tree_Node_Service} from './tree_node_service';

@Component({
    templateUrl: 'app/ts/tree_view.html',
    selector: 'tree-view',
    styleUrls: ['app/ts/tree_node_component.css'],
    directives: [Tree_View],
    outputs: ['childChanged']
})

export class Tree_View implements OnInit {

    @Input() root: Tree_Node;
    childChanged = new EventEmitter<any>();
    children: any;
    items = [];
    subscription;
    selectedNode: Tree_Node;
    
    constructor(private _api: Api_Wrapper, private _paneltreeNodeService: Tree_Node_Service) {
    debugger;
}

    ngOnInit() {
        debugger;
        this.subscription = this._api.getTreeNodes(this.root.id).subscribe(res => {
            this.items = res;
        });
        this._paneltreeNodeService.loadTreeNodes(this.root);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ClickMethod(p: Tree_Node) {
        debugger;
        this.selectedNode = p;
        this.childChanged.emit(p);
        //alert("Slected Node : " + JSON.stringify(p.tag));
    }
    
    subChildChanged(h:Tree_Node)
    {
        debugger;
        this.childChanged.emit(h);
    }
}