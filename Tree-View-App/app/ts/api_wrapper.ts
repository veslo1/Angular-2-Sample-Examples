import {Injectable} from 'angular2/core';
import {Observable, Subject} from 'rxjs/Rx';
import {Http, Response, Headers} from 'angular2/http';
import {Tree_Node} from './tree_node';
import {Tree_Node_Reducer} from './tree_node_reducer';

@Injectable()
export class Api_Wrapper {

    private dispatcher = new Subject<any>();
    private treeNodes = {};
    private nodes = {};

    constructor(private _http: Http) {
        this.dispatcher.subscribe((action) => this.handleAction(action));
    }

    private handleAction(action) {
        debugger;
        if (action.name === 'LOAD_NODES') {
            if (this.nodes[action.key]) {
                this.treeNodes[action.key].next(this.nodes[action.key]);
            }
            else {
                this._http
                    .get(action.url)
                    .map((res: Response) => res.json())
                    .subscribe(res => {
                        this.nodes[action.key] = Tree_Node_Reducer(res, action);
                        this.treeNodes[action.key].next(this.nodes[action.key]);
                    });
            }
        }
    }

    getTreeNodes(key) {
        if (!this.treeNodes.hasOwnProperty(key)) {
            this.treeNodes[key] = new Subject<Array<Tree_Node>>();
        }
        return this.treeNodes[key].asObservable();
    }

    dispatchAction(action) {
        this.dispatcher.next(action);
    }
}