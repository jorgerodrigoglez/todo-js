import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnDeleteAllCompleteTasks = document.querySelector(".clear-completed");
const filters = document.querySelector(".filters");
const anchorFilters = document.querySelectorAll(".filtro");

export const createTodoHtml = todo => {
  const htmlTodo = `
      <li class="${todo.complete ? "completed" : ""}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.complete ? "checked" : ""}>
        <label>${todo.task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

// input text
txtInput.addEventListener("keyup", e => {
  //console.log(e);
  if (e.keyCode === 13 && txtInput.value.length > 0) {
    const todoNew = new Todo(txtInput.value);
    todoList.newTodo(todoNew);
    //console.log(todoList);
    createTodoHtml(todoNew);
    txtInput.value = "";
  }
});

// input check
divTodoList.addEventListener("click", e => {
  //console.log(e);
  //console.log(e.target.localName);
  const elementName = e.target.localName; // input, label, button
  const todoElement = e.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  //console.log( elementName );
  //console.log( todoElement );
  //console.log( todoId );

  // cambia el check de tarea completada
  if (elementName.includes("input")) {
    todoList.markCompleteTask(todoId);
    todoElement.classList.toggle("completed");
    // borra la tarea
  } else if (elementName.includes("button")) {
    todoList.deleteTodoTask(todoId);
    divTodoList.removeChild(todoElement);
  }
});

// borra todas las tareas completadas
btnDeleteAllCompleteTasks.addEventListener("click", () => {
  // elimina tareas del array de tareas
  todoList.deleteCompleteTasks();
  // elimina tareas del html
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];
    //console.log(element);
    if (element.classList.contains("completed")) {
      divTodoList.removeChild(element);
    }
  }
});

// establecer filtros para mostrar todas las tareas, completadas y pendientes
filters.addEventListener("click", e => {
  e.preventDefault();
  //console.log(e.target.text);
  const filter = e.target.text;
  if (!filter) {
    return;
  }
  // cambiar la clase selected para seleccionar elemento
  anchorFilters.forEach( elem => elem.classList.remove('selected'));
  //console.log(e.target);
  e.target.classList.add('selected');

  for (const element of divTodoList.children) {
    console.log(element);
    element.classList.remove("hidden");
    const completeTask = element.classList.contains("completed");

    switch (filter) {
      case "Pendientes":
        if (completeTask) {
          element.classList.add("hidden");
        }
        break;

      case "Completados":
        if (!completeTask) {
          element.classList.add("hidden");
        }
        break;
    }
  }
});
