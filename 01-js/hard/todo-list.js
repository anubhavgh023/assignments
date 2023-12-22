/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
// 
class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
    return this.todos;
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
    return this.todos;
  }
  update(indexOfTodo, updateTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1, updateTodo);
      return this.todos;
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todos.length) {
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos.length = 0;
    return this.todos;
  }
}

// let todoList = new Todo;  

// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');

// todoList.update(1, 'Update Task 2');
// todoList.update(3, 'Invalid Task');

// console.log(todoList);

module.exports = Todo;
