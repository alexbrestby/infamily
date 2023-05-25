import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  IsUserLoggedIn: boolean = true;

  toggleLogin() {
    this.IsUserLoggedIn = !this.IsUserLoggedIn;
  }
}
