import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { CardArticleComponent } from '../home/components/card-section/card-section.component';
@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HeroSectionComponent, CardArticleComponent],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.scss'
})
export class PruebasComponent {

}
