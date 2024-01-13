import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeServiceComponent } from '../../components/home-service/home-service.component';
import { HomeServiceDescriptionComponent } from '../../components/home-service-description/home-service-description.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeServiceComponent,
    HomeServiceDescriptionComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
