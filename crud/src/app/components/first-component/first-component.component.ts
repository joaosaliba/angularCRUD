import { Component } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Jock Jones';
  data: Date = new Date();
  constructor() {}
  ngOnIniti(): void {}
}
