import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userName: string = '';
  @Input() userImg: string = '';
  navList = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages'];

  constructor(private authSvc: AuthService) {}

  signOut () {
    this.authSvc.signOut();
  }
}
