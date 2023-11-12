import { TodoList, TaskStatus, Todo } from '../todo/TodoList.js';

const list: HTMLUListElement | null = document.querySelector('#list');
const input: HTMLInputElement | null = document.querySelector('#input');
const addButton: HTMLButtonElement | null =
  document.querySelector('#save-button');
const initialMessage: HTMLParagraphElement | null =
  document.querySelector('#initial-message');

const todoList = new TodoList();

addButton?.addEventListener('click', () => {
  if (!input) {
    return;
  }

  const newTask: Todo = {
    id: crypto.randomUUID(),
    text: input.value,
    status: TaskStatus.Pending,
  };

  const { id, text, status } = newTask;
  const task = new Todo(id, text, status);
  todoList.addTask(task);

  let li = document.createElement('li');
  li.innerHTML = `
    <input id="input" type="checkbox" ${
      task.status === TaskStatus.Pending ? '' : 'checked'
    } />
    <p>${task.text}</p>
    <p id="delete-button">❌</p>
  `;

  const deleteButton = li.querySelector('#delete-button');
  deleteButton?.addEventListener('click', () => {
    if (deleteButton && list) {
      todoList.deleteTask(task.id);
      list.removeChild(li);
      isEmptyTaskList();
      console.log(todoList.getTasks());
    }
  });

  const statusInput = li.querySelector(`#input`);
  statusInput?.addEventListener('change', () => {
    if (statusInput) {
      todoList.updateTaskStatus(task.id);
      console.log(task);
    }
  });

  if (list) {
    list.prepend(li);
  }

  input.value = '';
  input.focus();
  isEmptyTaskList();
  console.log(todoList.getTasks());
});

function isEmptyTaskList(): void {
  if (todoList.getTasks().length === 0 && initialMessage !== null) {
    initialMessage.style.display = 'block';
  } else if (initialMessage !== null) {
    initialMessage.style.display = 'none';
  }
}
