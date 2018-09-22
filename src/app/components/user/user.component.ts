import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string; // = 'John Doe';
  age: number;
  address: Address;
  hobbies: string[];
  email: string;
  constructor() { }

  ngOnInit() {
    this.name = 'Karthik Suddapalli';
    this.age = 35;
    this.email = 'karsud81@gmail.com';
    this.address = {
      houseNo: 81,
      street: 'James cook dr',
      state: 'Vic'
    };
    this.hobbies = ['watch youtube', 'codeing', 'careing'];
  }
  onClick() {
    console.log('clicked me');
    this.name = 'Kar suddapalli';
  }
}

interface Address {
  houseNo: number;
  street: string;
  state: string;
}
