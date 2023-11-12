import { TodoList, Todo, TaskStatus } from '../todo/TodoList.js';
import inquirer from 'inquirer';
import crypto from 'crypto';
import colors from 'colors';

export const taskList = new TodoList();

export async function addTask() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      prefix: '',
      message: 'Nueva tarea:',
    },
  ]);

  const newTask = new Todo(generateID(), answers.text, TaskStatus.Pending);
  taskList.addTask(newTask);
  console.log(' ');
  console.log(colors.green('Tarea añadida!'));
  console.log(' ');
}

export async function updateTaskStatus() {
  const tasks = taskList.getTasks();
  const taskChoices = tasks.map((task) => ({
    name: task.text,
    value: task.id,
  }));

  taskChoices.push({
    name: 'Salir',
    value: 'salir',
  });

  const answer = await inquirer.prompt([
    {
      type: 'rawlist',
      prefix: '',
      name: 'taskId',
      message: 'Elige tarea para cambiar:',
      choices: taskChoices,
    },
  ]);

  if (answer.taskId === 'salir') {
    console.log(' ');
    console.log(
      colors.yellow('Operación cancelada. No se actualizó ninguna tarea.')
    );
    console.log(' ');
  } else {
    taskList.updateTaskStatus(answer.taskId);
    console.log(' ');
    console.log(colors.green('Estado cambiado!'));
    console.log(' ');
  }
}

export async function deleteTask() {
  const tasks = taskList.getTasks();
  const taskChoices = tasks.map((task) => ({
    name: task.text,
    value: task.id,
  }));

  taskChoices.push({
    name: 'Salir',
    value: 'salir',
  });

  const answer = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'taskId',
      prefix: colors.red('Atención!'),
      message: 'Elige una tarea para eliminar:',
      choices: taskChoices,
    },
  ]);

  if (answer.taskId === 'salir') {
    console.log(' ');
    console.log(
      colors.yellow('Operación cancelada. No se eliminó ninguna tarea.')
    );
    console.log(' ');
  } else {
    taskList.deleteTask(answer.taskId);
    console.log(' ');
    console.log(colors.green('Tarea eliminada correctamente!'));
    console.log(' ');
  }
}

export async function deleteAllTasks() {
  const answer = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'options',
      prefix: colors.bgRed(`Atencion!`),
      message: `¿Quieres eliminar ${colors.red('todas')} las tareas?`,
      default: false,
    },
  ]);

  if (answer.options) {
    taskList.deleteAllTasks();
    console.log(' ');
    console.log(colors.green('Todas las tareas eliminadas!'));
    console.log(' ');
  } else {
    console.log(' ');
    console.log(colors.yellow('Operación cancelada!'));
    console.log(' ');
  }
}

export async function viewTasks() {
  const tasks = taskList.getTasks();
  const taskListLength = taskList.getTasks().length;
  console.log(' ');
  console.log(colors.blue(`Lista de tareas [${taskListLength}]:`));
  console.log(' ');
  tasks.forEach((task) => {
    console.log(
      `- ${task.text} (Estado: ${
        task.status === 'pending'
          ? colors.cyan('Pendiente')
          : colors.green('Realizada')
      })`
    );
  });
  console.log(' ');
}

export function generateID(): string {
  const randomUUID = crypto.randomUUID();
  return randomUUID;
}

export let header = `
#################################
##         ${colors.bold(`${colors.green('</')}`)}${colors.bold(
  `todoList`
)}${colors.bold(`${colors.green('>')}`)}         ##
#################################
`;
