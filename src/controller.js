import {todoListFactory, todoItemFactory, updateTodoList, retrieveTodoList, removeTodoList} from './model.js';

export function removeTodoItem(e){
  const todoItemsContainer = document.querySelector('#todo-items-container');
  const todoListIndex = todoItemsContainer.dataset.todoListIndex;
  const itemIndex = e.target.dataset.removeItem;

  let todoList = retrieveTodoList(todoListIndex);
  todoList.todo.splice(itemIndex, 1);

  updateTodoList(todoList);
}
