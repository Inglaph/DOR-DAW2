import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  title = 'Contactanos';

  contact = [
    {
      iconUrl: '../../../../assets/icons/contact/icono-telephone.svg',
      title: 'Telefono',
      description: '1234567890',
      link: 'tel:1234567890'
    },
    {
      iconUrl: '../../../../assets/icons/contact/icono-email.svg',
      title: 'Email',
      description: 'info@inglap.com',
      link: 'mailto:info@inglap.com'
    },
    {
      iconUrl: '../../../../assets/icons/contact/icono-location.svg',
      title: 'Ubicacion',
      description: 'Av. Siempre Viva 123',
      link: 'https://www.google.com/maps'
    }
  ]

}
