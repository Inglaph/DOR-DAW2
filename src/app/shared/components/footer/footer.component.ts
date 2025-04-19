import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from '../social-media/social-media.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialMediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  

}
