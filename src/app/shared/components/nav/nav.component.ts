import { Component, Input, OnInit } from '@angular/core';
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
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isMenuOpen = false;
  isDesktop = false;

  /**
   * Lista de enlaces de navegación.
   * @Input links - Un array de objetos NavigationItem que representan los enlaces.
   */
  @Input() links: NavigationItem[] = [
    new NavigationItem('Home', ''),
    new NavigationItem('Proyectos', '/projects'),
    new NavigationItem('Sobre mi', '/about'),
    new NavigationItem('Contacto', '/contact'),
  ];

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this)); // Escucha el evento de resize y llama a checkScreenSize
  }  

  checkScreenSize() { // Verifica el tamaño de la pantalla
    const width = window.innerWidth;
    this.isDesktop = width >= 1024; 
  }

  toggleMenu(): void { // Cambia el estado del menú
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void { // Cierra el menú
    this.isMenuOpen = false;
  }
}
