import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from "./components/card-section/card-section.component";
import { AplicationsSectionComponent } from "./components/aplications-section/aplications-section.component";
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { ContactCardComponent } from '../../shared/components/contact-card/contact-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FooterComponent,
    CardSectionComponent,
    AplicationsSectionComponent,
    ContactFormComponent,
    ContactCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
