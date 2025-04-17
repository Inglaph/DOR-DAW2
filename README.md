****# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# Documentación

## Documentación de Estilos (SassDoc)

Para la documentación de los estilos en este proyecto, se utiliza **SassDoc**. SassDoc permite generar documentación automática a partir de los comentarios en los archivos SCSS. La sintaxis utilizada incluye etiquetas como `@group`, `@description`, `@param`, y `@return`, entre otras. 

### Ejemplo de Comentario en SassDoc

```scss
/// @group navigation
/// @description Estilos para el menú de navegación
.nav {
    background-color: #007bff; // Color de fondo del nav
    color: #fff; // Color del texto
}
```

## Documentación de TypeScript (JSDoc)

Para la documentación del código TypeScript, se utiliza **JSDoc**. JSDoc permite generar documentación automática a partir de los comentarios en el código TypeScript. La sintaxis incluye etiquetas como `@param`, `@returns`, `@class`, y `@example`, entre otras.

### Ejemplo de Comentario en JSDoc

```typescript
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
```
```

### Explicación de la estructura:
- **Sección de Documentación**: Se ha creado un apartado titulado "Documentación" que incluye dos subsecciones: una para SassDoc y otra para JSDoc.
- **Descripción**: Cada subsección explica brevemente qué es la herramienta de documentación y cómo se utiliza en el proyecto.
- **Ejemplos**: Se incluyen ejemplos de comentarios para cada tipo de documentación, lo que ayuda a los desarrolladores a entender cómo documentar correctamente su código.

Puedes ajustar el contenido según tus necesidades específicas o el estilo de tu proyecto. Si necesitas más ayuda, no dudes en preguntar.