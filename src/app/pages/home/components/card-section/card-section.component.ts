import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'

})
export class CardSectionComponent {
  title = 'Nuestros enfoques de Desarrollo de Proyectos';

  articles = [
    {
      title: 'Energia Fotovoltaica',
      description: 'Soluciones sostenibles para la generación de energía limpia y sostenible.',
      image: '../../../assets/icons/cards/icon-fotovoltaic2.svg'
    },
    {
      title: 'Desarrollo Web',
      description: 'Soluciones tecnológicas para la creación de sitios web modernos y funcionales.',
      image: '../../../assets/icons/cards/icon-web-developer2.svg'
    },
    {
      title: 'Redes de Vapor & Condensado',
      description: 'Soluciones eficientes para la creación de redes de vapor y condensado para la industria.',
      image: '../../../assets/icons/cards/icon-steam2.svg'
    },
    
    
  ];
}
