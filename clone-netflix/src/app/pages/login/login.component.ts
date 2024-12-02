declare var google: any;

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    // Use ngAfterViewInit instead of ngOnInit for DOM-related operations
    if (typeof google !== 'undefined' && google.accounts) {
      // to initialize google id account
      google.accounts.id.initialize({
        client_id: environment.GOOGLE_CLIENT_ID,
        callback: (resp: any) => {
          this.handleLogin(resp);
        }
      });
  
      // to render button
      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 350
      });
    } else {
      console.error('Google Identity Services not available');
    }
  }

  private decodeToken(token: any) {
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(response: any) {
    if(response){
      // decode the token
      const payload = this.decodeToken(response.credential)
      // store in session
      sessionStorage.setItem("User", JSON.stringify(payload))
      // navigate to home/browse
      this.router.navigate(['home'])
    }
  }
}
