import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aplications-section',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './aplications-section.component.html',
  styleUrl: './aplications-section.component.scss'
})
export class AplicationsSectionComponent {
[x: string]: any;
  title = 'Nuestras Aplicaciones';
  applications = [
    {
      title: 'Calculos para tu proyecto Fotovoltaico',
      description: 'Gestiona tus proyectos de manera eficiente y optimiza tus costos. realiza calculos de manera rapida y sencilla.',
      image: '../../../../../assets/images/home/calculator-fotoviltaic.png',
      buttonText: 'Calcular'
    }
  ]
}
