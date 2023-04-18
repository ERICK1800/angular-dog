import { Component } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  dog1 : Dog = {
    "message" : "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_10355.jpg",
    "status" : "true"
  } as Dog;

  getName1(): string []{
    return this.dog1.message.split("/")[4].split("-");
  }

  dog2 : Dog = {
    "message" : "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    "status" : "true"
  } as Dog;

  getName2(): string []{
    return this.dog2.message.split("/")[4].split("-");
  }

  dog3 : Dog = {
    "message" : "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1033.jpg",
    "status" : "true"
  } as Dog;

  getName3(): string []{
    return this.dog3.message.split("/")[4].split("-");
  }
}
