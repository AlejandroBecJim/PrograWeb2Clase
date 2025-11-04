import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Userservice } from '../services/userservice';
import { User } from '../models/user';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: Userservice) {}
  signin() {

    var user:User={
      id: "",
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.createUser(user).subscribe(userId => {
      console.log('User created with ID:', userId);
    });
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  }
}
