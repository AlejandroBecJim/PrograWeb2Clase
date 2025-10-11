import { Component } from '@angular/core';
import { Userservice } from '../services/userservice';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  information:any;
  token:string='';
  profileData:any;  
  constructor(private userService: Userservice) {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.information = JSON.parse(user);
      this.token = this.information.token;
      
    }
    this.loadProfile();
  }
  loadProfile() {
    console.log('Loading profile for:', this.information.user.email);
    this.userService.getProfile(this.information.user.email, this.token).subscribe(
      profile => {
        this.profileData = profile;
        console.log('Profile data:', this.profileData);
      },
      error => {
        console.error('Failed to load profile:', error);
      }
    );
  }
}
