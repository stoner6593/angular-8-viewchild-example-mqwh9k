import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;

  @ViewChild('pRef', {static: false}) pRef: ElementRef;

    ngAfterViewInit() {
    console.log('Hello ', this.hello.name); 
    console.log(this.pRef.nativeElement.innerHTML); 
    this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!"; 
  }
}
