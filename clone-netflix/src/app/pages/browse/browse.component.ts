import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem('User')!).name
  profilePic = JSON.parse(sessionStorage.getItem('User')!).picture
  email = JSON.parse(sessionStorage.getItem('User')!).email
  
  signOut() {
    sessionStorage.removeItem('User')
    this.auth.signOut()
  }

}
