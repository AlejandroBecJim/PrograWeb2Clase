import { Component } from '@angular/core';
import { Userservice } from '../services/userservice';
import { UserCredentials } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private userService: Userservice) {}
  login() {
    const credentials: UserCredentials = {
      email: this.email,
      password: this.password
    };
    this.userService.login(credentials).subscribe(
      response => {
        // Manejar la respuesta del inicio de sesión
        alert('Login successful!');
        sessionStorage.setItem('user', JSON.stringify(response));
        window.location.href = '/profile';

      },
      error => {
        // Manejar errores de inicio de sesión
        console.error('Login failed:', error);
      }
    );
  }
}
