import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  constructor(private http: HttpClient) {  }

  createUser(userData: any) {
    return this.http.post('http://localhost:8002/users/users/', userData);
  }
}
