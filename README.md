# todoList

Aplicacion simple de TodoList desarrollada con la técnica TDD y TypeScript.
Incluye interfaz CLI, testing y frontend básico en HTML.

##### Trabajo del Spring 1 de IT-Academy en la especialización de Node.js.

###### Descripción del ejercicio:

El objetivo de este ejercicio es crear una aplicación de lista de tareas utilizando TypeScript y TDD. La aplicación debe tener las siguientes características:

- Permitir agregar una tarea a la lista.

- Permitir marcar una tarea como completada.

- Permitir eliminar una tarea de la lista.

- Mostrar la lista de tareas.

⭐ Nivel 1  
Utiliza pruebas para verificar la funcionalidad de la aplicación.

⭐⭐ Nivel 2  
Crea una interfaz de línea de comandos (CLI) para verificar la funcionalidad de la aplicación.

⭐⭐⭐ Nivel 3  
Crea un front-end para verificar la funcionalidad de la aplicación.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```bash
git clone https://github.com/carlosYoko/todolist-ita-spring1.git
cd todolist-ita-spring1
npm install
```

### Para compilar el proyecto:

Para compilar el proyecto, usa el siguiente comando:

```bash
npm run build
```

### Ejecutar la aplicacion por CLI

Para ejecutar la aplicacion mediante CLI, usa el siguiente comando:
Este comando ejecuta el CLI del proyecto compilado.

```bash
npm run start
```

### Ejecutar tests

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

## Funcionalidades adicionales

En el frontend, he incluido salidas por la consola para proporcionar información sobre las siguientes acciones:

- **Agregar una nueva tarea:** Cada vez que se agrega una nueva tarea, se mostrará un mensaje en la consola confirmando que se ha actualizado el arreglo de tareas y el DOM.

- **Modificar el estado de una tarea:** Cuando se modifica el estado de una tarea, se imprimirá un mensaje en la consola para mostrar que el arreglo de tareas ha sido actualizado y se refleja en el DOM.

- **Eliminar una tarea:** Cuando se elimina una tarea, se reflejará en la consola que el arreglo de tareas ha sido actualizado.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.
