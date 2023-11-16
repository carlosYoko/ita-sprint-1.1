import {
  addTask,
  updateTaskStatus,
  deleteTask,
  deleteAllTasks,
  viewTasks,
  header,
} from './cliFunctions';
import inquirer from 'inquirer';
import colors from 'colors';

async function main() {
  let answer;
  console.log(header);

  while (answer !== 'Salir') {
    answer = await inquirer.prompt([
      {
        type: 'rawlist',
        name: 'action',
        prefix: '</todoList>',
        message: '- Menu principal -',
        choices: [
          'Añadir tarea',
          'Cambiar estado de tarea',
          'Eliminar tarea',
          'Ver todas las tareas',
          'Eliminar todas las tareas',
          'Salir',
        ],
      },
    ]);

    switch (answer.action) {
      case 'Añadir tarea':
        await addTask();
        break;
      case 'Cambiar estado de tarea':
        await updateTaskStatus();
        break;
      case 'Eliminar tarea':
        await deleteTask();
        break;
      case 'Eliminar todas las tareas':
        await deleteAllTasks();
        break;
      case 'Ver todas las tareas':
        await viewTasks();
        break;
      case 'Salir':
        console.log(
          colors.green(`      
        Hasta la próxima!
        
        `)
        );
        return;
    }
  }
}

main();
