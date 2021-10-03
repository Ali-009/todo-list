import {
  todoListFactory,
  todoItemFactory,
  updateTodoList,
  retrieveTodoList,
} from "./model.js";

export { removeTodoList } from "./model.js";

export function createTodoList() {
  let newTodoList = todoListFactory("New Todo-list");
  let defaultTodoItem = todoItemFactory();
  newTodoList.todo[0] = defaultTodoItem;

  updateTodoList(newTodoList);
  return newTodoList;
}

export function removeTodoItem(e) {
  const todoListIndex = obtainTodoListIndex();
  const itemIndex = e.target.dataset.removeItem;

  let todoList = retrieveTodoList(todoListIndex);
  todoList.todo.splice(itemIndex, 1);

  updateTodoList(todoList);
}

export function updateTodoItem(e) {
  const todoListIndex = obtainTodoListIndex();
  const itemIndex = e.target.dataset.saveItem;

  //The order of todo properties differs from the view here to match the order defined in model.js
  const todoProperty = [
    "title",
    "description",
    "due-date",
    "priority",
    "checked",
  ];
  let todoPropertyValue = [];

  for (let i = 0; i < todoProperty.length; i++) {
    let todoPropertyElement = document.querySelector(
      `#${todoProperty[i]}-${itemIndex}`
    );
    //the boolean value for a checkbox is stored in 'checked' and not 'value'
    if (todoProperty[i] !== "checked") {
      todoPropertyValue[i] = todoPropertyElement.value;
    } else {
      todoPropertyValue[i] = todoPropertyElement.checked;
    }
  }

  let todoList = retrieveTodoList(todoListIndex);
  let todoListItem = todoList.todo[itemIndex];
  let count = 0; //count to help with traversing the todoPropertValue array
  for (let prop in todoListItem) {
    todoListItem[prop] = todoPropertyValue[count];
    count++;
  }
  //updating localStorage
  todoList.todo[itemIndex] = todoListItem;
  updateTodoList(todoList);
}

export function createTodoItem() {
  const todoListIndex = obtainTodoListIndex();
  let todoList = retrieveTodoList(todoListIndex);

  let newTodoItem = todoItemFactory();
  todoList.todo.push(newTodoItem);

  updateTodoList(todoList);
}

export function editTodoListTitle(index) {
  let todoList = retrieveTodoList(index);
  todoList.name = document.querySelector("#title-input").value;
  updateTodoList(todoList);
}

//Helps us know which todo-list we are currently viewing
function obtainTodoListIndex() {
  const todoItemsContainer = document.querySelector("#todo-items-container");
  const todoListIndex = todoItemsContainer.dataset.todoListIndex;
  return todoListIndex;
}
