import {Injectable} from 'angular2/core';
import {Store} from './store';

@Injectable()
export class TreeNodeService{

  constructor(private _store:Store){
  }

  loadTreeNodes(root){
     debugger;
      if (root.url) {
      this._store.dispatchAction({key: root.key, url: root.url, name: 'LOAD_NODES'});
    }
  }
}