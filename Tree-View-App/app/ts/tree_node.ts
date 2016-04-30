export class Tree_Node {
  showIcon = false;
  expanded = false;
  icon = null;
  name: string;
  tag: any;
  constructor(public idType, public id, public noOfChild) {
    if (noOfChild != 0) {
      this.showIcon = true;
      this.icon = this.getIcon();
    }
  }

  expand() {
    debugger;
    this.expanded = !this.expanded;
    this.icon = this.getIcon();
  }

  private getIcon() {
    if (this.showIcon === true) {
      if (this.expanded) {
        return '- ';
      }
      return '+ ';

    }
    return null;
  }
}