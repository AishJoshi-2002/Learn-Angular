import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authServ: AuthService) { }
  logOut() {
    sessionStorage.removeItem('User')
    this.authServ.signOut()
  }
}
