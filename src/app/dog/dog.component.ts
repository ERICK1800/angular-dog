import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{

  constructor(private dogService: DogService) {}
  ngOnInit(): void {
    this.loadDog1();
    this.loadDog2();
    this.loadDog3();
  }

  loadDog1() {
    this.dogService.getRandomDog().subscribe(
      {next : dog => this.dog1 = dog}
    );
  }
  dog1 : Dog = {} as Dog;
  getName1(): string []{
    return this.dog1.message.split("/")[4].split("-");
  }

  loadDog2() {
    this.dogService.getRandomDog().subscribe(
      {next : dog => this.dog2 = dog}
    );
  }
  dog2 : Dog = {} as Dog;
  getName2(): string []{
    return this.dog2.message.split("/")[4].split("-");
  }

  loadDog3() {
    this.dogService.getRandomDog().subscribe(
      {next : dog => this.dog3 = dog}
    );
  }
  dog3 : Dog = {} as Dog;
  getName3(): string []{
    return this.dog3.message.split("/")[4].split("-");
  }
}
