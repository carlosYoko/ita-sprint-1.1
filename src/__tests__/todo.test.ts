import { TaskStatus, TodoList, Todo } from '../todo/TodoList';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('TodoList', () => {
  let taskList = new TodoList();

  beforeEach(() => {
    taskList.deleteAllTasks();
  });

  it('crear nueva tarea', () => {
    const task = new Todo('1', 'Estudiar Node.js', TaskStatus.Pending);

    expect(taskList).toBeInstanceOf(TodoList);

    expect(task.id).toBe('1');
    expect(task.text).toBe('Estudiar Node.js');
    expect(task.status).toBe('pending');
  });

  it('agregar tarea a la lista', () => {
    const task = new Todo('1', 'Estudiar TS', TaskStatus.Pending);
    taskList.addTask(task);

    expect(taskList.getTasks()).toContain(task);
  });

  it('modificar estado de la tarea', () => {
    const task1 = new Todo('1', 'Estudiar Python', TaskStatus.Completed);
    const task2 = new Todo('2', 'Estudiar Java', TaskStatus.Pending);
    taskList.addTask(task1);
    taskList.addTask(task2);
    taskList.updateTaskStatus('1');
    taskList.updateTaskStatus('2');

    expect(task1.status).toBe('pending');
    expect(task2.status).toBe('completed');
  });

  it('eliminar tarea', () => {
    const task1 = new Todo('1', 'Estudiar Cypress', TaskStatus.Completed);
    const task2 = new Todo('2', 'Estudiar Jest', TaskStatus.Pending);
    taskList.addTask(task1);
    taskList.addTask(task2);
    taskList.deleteTask('1');

    const taskListLength = taskList.getTasks();
    expect(taskList.getTasks()).not.toContain(task1);
    expect(taskList.getTasks()).toContain(task2);
    expect(taskListLength.length).toBe(1);
  });

  it('eliminar todas las tareas', () => {
    const taskList = new TodoList();
    const task1 = new Todo('1', 'Estudiar VMC', TaskStatus.Completed);
    const task2 = new Todo('2', 'Estudiar Flux', TaskStatus.Pending);

    taskList.addTask(task1);
    taskList.addTask(task2);
    taskList.deleteAllTasks();

    const taskListLength = taskList.getTasks();

    expect(taskListLength.length).toBe(0);
  });
});
