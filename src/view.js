import {todoListFactory, todoItemFactory, updateTodoList, retrieveTodoList, retrieveAllTodoLists, removeTodoList} from './model.js';

import backIcon from './assets/outline_arrow_back_black_24dp.png';
import addIcon from './assets/outline_add_black_24dp.png';
import deleteIcon from './assets/outline_clear_black_24dp.png';

import {createTodoItem, updateTodoItem, removeTodoItem} from './controller.js';

import {testTodoListCreation} from '../console-tests.js';
import './todo.css';

const pageContainer = document.querySelector('#page-container');

//dsiplays the names of all todoLists on the homepage
function loadAllTodoLists(){

  const todoListContainer = document.createElement('div');
  todoListContainer.setAttribute('id', 'todo-list-container');
  pageContainer.appendChild(todoListContainer);

  let todoListArray = retrieveAllTodoLists();

  for(let i = 0; i < todoListArray.length; i++){
    let todoContainer = createSingleTodoListDiv(todoListArray[i]);
    todoListContainer.appendChild(todoContainer);
  }

  const addTodoListButton = createAddTodoListButton();
  todoListContainer.appendChild(addTodoListButton);
}

/*creates a contianer for a single todoList, simply displaying its name. The todoList once clicked displays its content*/
function createSingleTodoListDiv(todoList){

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');
  todoContainer.setAttribute('data-display', todoList.index);

  todoContainer.textContent = todoList.name;

  todoContainer.addEventListener('click', displayTodoListContent);

  //Creating a button to remove the todoList
  const todoListRemoveButton = createRemoveTodoListButton(todoList.index);
  todoContainer.appendChild(todoListRemoveButton);

  return todoContainer;

}

//Add todo-list button
function createAddTodoListButton(){
  const addTodoListButton = document.createElement('img');
  addTodoListButton.setAttribute('id','add-todo-list');
  addTodoListButton.setAttribute('src', addIcon);

  addTodoListButton.addEventListener('click', (e) => {

  });

  return addTodoListButton;
}
//Every todolist has a button to remove it entirely
function createRemoveTodoListButton(index){

  const todoListRemoveButton = document.createElement('img');
  todoListRemoveButton.setAttribute('data-remove', index);
  todoListRemoveButton.setAttribute('src', deleteIcon);
  todoListRemoveButton.style.cursor = 'pointer';

  todoListRemoveButton.addEventListener('click', (e) => {
    //This instruction is important as it prevents createTodoList from triggering when what we want is to remove a ToDoList
    e.stopPropagation();
  });

  return todoListRemoveButton;

}

/*The event handler for clicking a todoList. Displays all of the list's content*/
function displayTodoListContent(e){

  document.querySelector('#todo-list-container').remove();

  //The below elements wrap other elements for styling purposes
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  const navigationContainer = document.createElement('div');
  navigationContainer.setAttribute('id','navigation-container');
  const todoContainer = document.createElement('div');
  todoContainer.setAttribute('id','todo-items-container');
  todoContainer.setAttribute('data-todo-list-index', e.target.dataset.display);

  let index = e.target.dataset.display;
  let todoList = retrieveTodoList(index);

  for(let i = 0; i < todoList.todo.length; i++){
    todoContainer.appendChild(displayTodoItem(todoList.todo[i], i));
  }

  navigationContainer.appendChild(createBackButton());
  navigationContainer.appendChild(createAddTodoItemButton());

  wrapper.appendChild(navigationContainer);
  wrapper.appendChild(todoContainer);

  pageContainer.appendChild(wrapper);

}

//provide a button to return to the homepage
function createBackButton(){
  const backButton = document.createElement('img');
  backButton.setAttribute('id','back-button');
  backButton.setAttribute('src', backIcon);

  backButton.addEventListener('click', (e) => {
    document.querySelector('#wrapper').remove();
    loadAllTodoLists();
  });

  return backButton;
}

function createAddTodoItemButton(){
  const addButton = document.createElement('img');
  addButton.setAttribute('id','add-todo-button');
  addButton.setAttribute('src', addIcon);

  //The button's event listener should go here
  addButton.addEventListener('click', (e) => {
    createTodoItem();

    const todoItemsContainer = document.querySelector('#todo-items-container');
    const todoListIndex = todoItemsContainer.dataset.todoListIndex;

    const todoList = retrieveTodoList(todoListIndex).todo;
    const newTodoItem = todoList[todoList.length - 1];
    const todoItemElement =
    displayTodoItem(newTodoItem, todoList.length - 1);

    todoItemsContainer.appendChild(todoItemElement);
  });

  return addButton;
}

//Responsible of displaying a single todoItem within a TodoList
function displayTodoItem(todoItem, index){

  //create a container for a todoItem in the todoList
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('todo-item');
  todoItemElement.setAttribute('data-todo-item', index);

  //Title property
  const titleElement = document.createElement('input');
  titleElement.setAttribute('type','text');
  titleElement.value = todoItem.title;

  //Description property
  const descriptionElement = document.createElement('textarea');
  descriptionElement.value = todoItem.description;

  //Priority Property
  const priorityElement = document.createElement('input');
  priorityElement.value = todoItem.priority;

  //Date property
  const dateElement = document.createElement('input');
  dateElement.setAttribute('type','date');
  dateElement.value = todoItem.dueDate;

  //Checked property
  const checkedElement = document.createElement('input');
  checkedElement.setAttribute('type', 'checkbox');
  todoItem.checked ? checkedElement.checked = true :
      checkedElement.checked = false;

  //Appending elments alongside their labels as todoItemElement
  let elementArray = [titleElement, descriptionElement, priorityElement, dateElement, checkedElement];
  let elementIdArray = ['title', 'description', 'priority',
      'due-date','checked'];
  let labelTextArray = ['', '', 'Priority: ',
      'Due Date: ', 'Done'];
  for(let i = 0; i < elementArray.length; i++){
    const label = document.createElement('label');
    label.setAttribute('for',`${elementIdArray[i]}-${index}`);
    label.textContent = labelTextArray[i];
    todoItemElement.appendChild(label);
    elementArray[i].setAttribute('id', `${elementIdArray[i]}-${index}`);
    label.appendChild(elementArray[i]);
  }

  const formControl = document.createElement('div');
  formControl.setAttribute('class','form-control');

  const saveButton = createTodoItemSaveButton(index);
  const removeButton = createTodoItemRemoveButton(index);

  saveButton.textContent = 'Save';
  removeButton.textContent = 'Remove';

  formControl.appendChild(removeButton);
  formControl.appendChild(saveButton);

  todoItemElement.appendChild(formControl);

  return todoItemElement;
}

function createTodoItemSaveButton(index){
  const saveButton = document.createElement('button');
  saveButton.setAttribute('data-save-item', index);

  saveButton.addEventListener('click', updateTodoItem);

  return saveButton;
}

function createTodoItemRemoveButton(index){
  const removeButton = document.createElement('button');
  removeButton.setAttribute('data-remove-item', index);

  removeButton.addEventListener('click', (e) => {
    //removing the todo-item from localStorage
    removeTodoItem(e);
    //removing the todo-item from the display
    document.querySelector(`div[data-todo-item="${e.target.dataset.removeItem}"]`).remove();
  });

  return removeButton;
}

//testing the view.js module, to be removed later
testTodoListCreation();
loadAllTodoLists();
