import {Injectable} from 'angular2/core';
import {Api_Wrapper} from './api_wrapper';

@Injectable()
export class Tree_Node_Service {

  constructor(private _api: Api_Wrapper) {
  }

  loadTreeNodes(root) {
    debugger;
    switch (root.idType) {
      case 'SiteId':
        {
          this._api.dispatchAction({
            key: root.id,
            idType: root.idType,
            url: 'http://fusionapi.azurewebsites.net/api/site/getallpanels?siteId=' + root.id,
            name: 'LOAD_NODES'
          });
          break;
        }
      case 'PanelID':
        {
          this._api.dispatchAction({
            key: root.id,
            idType: root.idType,
            url: 'http://fusionapi.azurewebsites.net/api/site/getallloops?panelId=' + root.id,
            name: 'LOAD_NODES'
          });
          break;
        }
      case 'LoopId':
        {
          this._api.dispatchAction({
            key: root.id,
            idType: root.idType,
            url: 'http://fusionapi.azurewebsites.net/api/Site/GetDevices?loopId=' + root.id,
            name: 'LOAD_NODES'
          });
          break;
        }
    }
  }
}