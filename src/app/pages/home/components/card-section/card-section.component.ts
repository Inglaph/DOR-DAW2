import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  imports: [],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'

})
export class CardSectionComponent {

  articles = [
    {
      title: 'Article 1',
      description: 'Description 1',
      image: 'https://via.placeholder.com/150'
    },
  

}
