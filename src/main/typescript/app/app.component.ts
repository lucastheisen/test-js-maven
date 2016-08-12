import { Component } from '@angular/core';
import { Foo } from "../foo";

@Component({
  selector: 'my-app',
  template: '<h1>My Fifth Angular 2 App</h1>'
})
export class AppComponent {
    constructor(public foo: Foo) {
        foo.firstName = "bar";
        let fooFull = foo.fullName;
    }
}
