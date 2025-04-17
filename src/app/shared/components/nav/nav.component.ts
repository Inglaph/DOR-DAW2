import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Clase que representa un elemento de navegación.
 */
class NavigationItem {
  label: string; // El texto que se mostrará en el enlace de navegación.
  url: string;   // La URL a la que se dirigirá el enlace.

  /**
   * Crea una instancia de NavigationItem.
   * @param label - El texto del enlace.
   * @param url - La URL del enlace.
   */
  constructor(label: string, url: string) {
    this.label = label;
    this.url = url;
  }
}

/**
 * Componente de navegación que muestra un menú de enlaces.
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  /**
   * Lista de enlaces de navegación.
   * @Input links - Un array de objetos NavigationItem que representan los enlaces.
   */
  @Input() links: NavigationItem[] = [
    new NavigationItem('Home', '/'),
    new NavigationItem('About', '/about'),
    new NavigationItem('Contact', '/contact'),
    new NavigationItem('Services', '/services'),
    new NavigationItem('Products', '/products'),
    new NavigationItem('Blog', '/blog'),
  ];
}
