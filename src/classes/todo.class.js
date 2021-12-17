export class Todo {
  // crear valores de nueva instancia para llamar metodos de la clase Todo
  /*static fromJson({ id, task, complete, create }) {
    const tempTodo = new Todo(task);
    tempTodo.id = id;
    tempTodo.complete = complete;
    tempTodo.create = create;
    return tempTodo;
  }*/

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime(); // 24949322
    this.complete = false;
    this.create = new Date();
  }

  // en referencia al metodo estatico
  // printClass(){
  //   console.log(`${ this.task } - ${ this.id }`);
  // }
}
