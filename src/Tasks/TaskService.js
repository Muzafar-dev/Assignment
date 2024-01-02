class TaskService {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  editTask(index, updatedTask) {
    this.tasks[index] = { ...this.tasks[index], ...updatedTask };
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }

  getTasks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.tasks);
      }, 1000); // Simulating a delay of 1 second
    });
  }
}

export default TaskService;
