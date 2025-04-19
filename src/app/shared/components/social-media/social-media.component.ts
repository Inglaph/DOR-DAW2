import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMedia = [
    {
      name: 'Facebook',
      icon: '../../../assets/icons/social-media/icon-facebook.svg',
      url: 'https://www.facebook.com/profile.php?id=100088921767846'
    },
    {
      name: 'Twitter',
      icon: '../../../assets/icons/social-media/icon-x.svg',
      url: 'https://www.twitter.com/profile.php?id=100088921767846'
    },
    {
      name: 'Instagram',
      icon: '../../../assets/icons/social-media/icon-instagram.svg',
      url: 'https://www.instagram.com/profile.php?id=100088921767846'
    },
    {
      name: 'LinkedIn',
      icon: '../../../assets/icons/social-media/icon-linkedin.svg',
      url: 'https://www.linkedin.com/profile.php?id=100088921767846'
    }
  ]

}
