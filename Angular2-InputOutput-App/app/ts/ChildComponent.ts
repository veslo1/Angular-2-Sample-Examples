import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'child',
    template: `
    <h1>Child</h1>
    <p>Entered some value from parent : {{parentValue}}</p>
    <input type="text" #cin (keyup)="onChange(cin.value)">`,
    inputs: ['parentValue'],
    outputs: ['childChanged']
})

export class ChildComponent {
    parentValue: string;
    childChanged = new EventEmitter<string>();
    onChange(value: string) {
        var xx :any = {};
        xx.tt = value;
        this.childChanged.emit(xx);
    }
}