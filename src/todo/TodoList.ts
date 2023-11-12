export enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed',
}

interface TodoInterface {
  readonly id: string;
  text: string;
  status: TaskStatus;
}

export class TodoList {
  private taskList: Todo[] = [];

  addTask(newTask: Todo): void {
    this.taskList.push(newTask);
  }

  updateTaskStatus(taskId: string): void {
    const foundTask = this.taskList.find((task) => task.id === taskId);

    if (foundTask) {
      foundTask.status =
        foundTask.status === TaskStatus.Pending
          ? TaskStatus.Completed
          : TaskStatus.Pending;
    }
  }

  deleteTask(taskId: string): void {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  deleteAllTasks(): void {
    this.taskList = [];
  }

  getTasks(): Todo[] {
    return this.taskList;
  }
}

export class Todo implements TodoInterface {
  readonly id: string;
  text: string;
  status: TaskStatus;

  constructor(id: string, text: string, status: TaskStatus) {
    this.id = id;
    this.text = text;
    this.status = status;
  }
}
