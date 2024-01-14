import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialnetworkComponent } from '../../components/socialnetwork/socialnetwork.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,SocialnetworkComponent,ContactsComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

}
