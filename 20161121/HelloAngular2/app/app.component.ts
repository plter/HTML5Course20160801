import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{data}}</h1>'
})
export class AppComponent {
    data = "Hello World";
}