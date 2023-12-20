import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE,Collapse } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-property';
   ngOnInit() {
    initTE({ Carousel, Dropdown,Collapse });
  }
}
