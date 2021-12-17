//import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    //this.todos = [];
    // cargar localStorage
    this.getLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    // localStorage
    this.saveLocalStorage();
  }

  deleteTodoTask(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    // localStorage
    this.saveLocalStorage();
  }

  markCompleteTask(id) {
    for (const todo of this.todos) {
      //console.log(id, todo.id);
      if (todo.id == id) {
        todo.complete = !todo.complete;
        // localStorage
        this.saveLocalStorage();
        break;
      }
    }
  }

  deleteCompleteTasks() {
    this.todos = this.todos.filter(todo => !todo.complete);
    // localStorage
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    // habilita el localstorage
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  getLocalStorage() {
    //   if( localStorage.getItem('todo')){
    //     this.todos = JSON.parse(localStorage.getItem('todo'));
    //     console.log( typeof this.todos);
    //     console.log('cargar desde localStorage:', this.todos);
    //   }else{
    //     this.todos = []
    //   }

    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    // reconstruyendo instancias de todos
    //this.todos = this.todos.map(obj => Todo.fromJson(obj));
    // idem
    //this.todos = this.todos.map(Todo.fromJson);
  }
}
