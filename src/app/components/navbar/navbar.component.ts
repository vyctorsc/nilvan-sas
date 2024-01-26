import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  showService: boolean = false;
  showMenu: boolean = false;
  showSocial: boolean = false;

  showItemService(){
    this.showService = !this.showService
  }
  showMenuDevice(){
    this.showMenu = !this.showMenu
  }
  showSocialNetwork(){
    this.showSocial = !this.showSocial
  }

}
