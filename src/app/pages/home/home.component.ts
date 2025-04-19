import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardSectionComponent } from "./components/card-section/card-section.component";
import { AplicationsSectionComponent } from "./components/aplications-section/aplications-section.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    FooterComponent,
    CardSectionComponent,
    AplicationsSectionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
