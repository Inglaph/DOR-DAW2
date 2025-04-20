import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = {
    name: 'Luis Alberto Posada Hoyos',
    role: 'CEO & Fundador de INGLAP',
    image: '../../../assets/images/about/foto-perfil2.png',
    description: 'Ingeniero Mecánico con especialización en Gestión de Proyectos. Apasionado por la innovación tecnológica y el desarrollo sostenible. Líder en proyectos de energía renovable y desarrollo web.',
    skills: [
      {
        category: 'Desarrollo Web',
        items: ['Angular', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SASS']
      },
      {
        category: 'Ingeniería',
        items: ['Gestión de Proyectos', 'Energía Fotovoltaica', 'Redes de Vapor', 'Automatización Industrial']
      },
      {
        category: 'Herramientas y Metodologías',
        items: ['Git', 'Scrum', 'Jira', 'Figma', 'AutoCAD', 'SolidWorks']
      }
    ],
    education: [
      {
        title: 'Especialización en Gestión de Proyectos',
        institution: 'Universidad EIA',
        year: '2023',
        description: 'Especialización enfocada en metodologías ágiles y gestión efectiva de proyectos tecnológicos.'
      },
      {
        title: 'Ingeniero Mecánico',
        institution: 'Universidad Nacional de Colombia',
        year: '2021',
        description: 'Formación en diseño mecánico, termodinámica, y automatización industrial.'
      },
      {
        title: 'Certificación en Desarrollo Web Full Stack',
        institution: 'Platzi',
        year: '2022',
        description: 'Especialización en tecnologías web modernas y desarrollo full stack.'
      }
    ],
    experience: [
      {
        role: 'CEO & Fundador',
        company: 'INGLAP',
        period: '2023 - Presente',
        description: 'Liderando proyectos innovadores en energía renovable y desarrollo web. Gestión integral de proyectos fotovoltaicos y desarrollo de soluciones web personalizadas.'
      },
      {
        role: 'Ingeniero de Proyectos',
        company: 'Spirax Sarco',
        period: '2021 - 2023',
        description: 'Gestión de proyectos de eficiencia energética y redes de vapor. Implementación de soluciones de automatización y optimización de procesos industriales.'
      },
      {
        role: 'Desarrollador Web Freelance',
        company: 'Independiente',
        period: '2022 - 2023',
        description: 'Desarrollo de aplicaciones web y móviles para diversos clientes. Implementación de soluciones personalizadas usando tecnologías modernas.'
      }
    ]
  };
}
