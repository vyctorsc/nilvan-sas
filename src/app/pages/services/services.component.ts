import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondHeaderComponent } from '../../components/second-header/second-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SecondHeaderComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent {

}
