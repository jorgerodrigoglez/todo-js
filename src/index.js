import "./styles.css";
import { TodoList, Todo } from "./classes";
import { createTodoHtml } from "./js/components";

//const task = new Todo("Hacer colada ---");
//const task1 = new Todo("Ir de compras");

export const todoList = new TodoList();
//console.log(todoList.todos);

//todoList.todos.forEach(todo => createTodoHtml( todo ));
// Idem
todoList.todos.forEach(createTodoHtml);

// reconstruyendo instancias de todos
// const todoNew = new Todo('app todos');
// todoList.newTodo(todoNew);
// todoList.todos[0].printClass();
// todoNew.printClass();

//console.log( task );
//task.complete = 'true';
//todoList.newTodo( task );
//todoList.newTodo( task1 );

//console.log( todoList );
// crea html de la tarea
//createTodoHtml( task );
