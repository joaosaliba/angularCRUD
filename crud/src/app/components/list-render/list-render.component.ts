import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'mel', type: 'dog' },
    { name: 'meg', type: 'dog' },
    { name: 'tupa', type: 'cat' },
    { name: 'Pirulito', type: 'House' },
  ];
  animal = {
    name: 'TUTU',
    type: 'FISH',
  };
}
