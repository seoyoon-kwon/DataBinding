import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <input [(ngModel)]="text"><br>
    <input bindon-ngModel="text"><br>
    <input [value]="text" (input)="handleInput($event)">
    <h1>{{text}}</h1>
  `
})


export class AppComponent {
  text: string = "some text here";

  handleInput(this:any, event: Event){
    this.value1 = (event.target as HTMLInputElement).value;
  }

}


