import { Component } from '@angular/core';
import { Foo } from "./foo";

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{foo.fullName}},</h1>'
})
export class AppComponent {
    foo = new Foo("Lucas", "Theisen");
}
 