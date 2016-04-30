import {Tree_Node} from './tree_node';

export const Tree_Node_Reducer = (state: any = [], action) => {
    debugger;
    switch (action.name) {
        case 'LOAD_NODES':
            {
                switch (action.idType) {
                    case 'SiteId':
                        {
                            return state.map(n => {
                                debugger;
                                var treeNode = new Tree_Node("PanelID", n.panelId, n.loopCount);
                                treeNode.name = n.panelName;
                                treeNode.tag = n;
                                return treeNode;
                            });
                        }
                    case 'PanelID':
                        {
                            return state.map(n => {
                                debugger;
                                var treeNode = new Tree_Node("LoopId", n.loopId, n.deviceCount);
                                treeNode.name = "Loop Number " + n.LoopNumber;
                                treeNode.tag = n;
                                return treeNode;
                            });
                        }
                    case 'LoopId':
                        {
                            return state.map(n => {
                                debugger;
                                var treeNode = new Tree_Node("DeviceId", n.deviceId, 0);
                                treeNode.name = n.deviceLabel;
                                treeNode.tag = n;
                                return treeNode;
                            });
                        }
                }
            }
    }
};