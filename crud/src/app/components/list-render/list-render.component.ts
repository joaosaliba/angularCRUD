import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'mel', type: 'dog', age: 2 },
    { name: 'meg', type: 'dog', age: 10 },
    { name: 'tupa', type: 'cat', age: 1 },
    { name: 'Pirulito', type: 'House', age: 15 },
  ];
  animal: Animal = {
    name: 'TUTU',
    type: 'FISH',
    age: 0.5,
  };
  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `The pet ${animal.name} age is ${animal.age} `;
    // console.log(this.animalDetails);
  }
}
