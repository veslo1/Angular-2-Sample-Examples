import {Component} from 'angular2/core';
import {ChildComponent} from './ChildComponent';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Parent</h1>
        <p>Entered some value from Child : {{childValue.tt}}</p>
        <p>Entered some value from Child : {{childValue.tt}}</p>
        <p>Entered some value from Child : {{childValue.tt}}</p>
        <input type="text" #pin (keyup)="0"><br>
            <div>
                <child [parentValue]="pin.value" (childChanged)="childValue=$event"></child>
            </div>
    </div>
    `,
    directives: [ChildComponent]
})

export class AppComponent {
    childValue: any = {};
}