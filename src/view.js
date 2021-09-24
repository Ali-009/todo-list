import {todoListFactory, todoItemFactory, updateTodoList, retrieveTodoList, retrieveAllTodoLists, removeTodoList} from './model.js';

import {testTodoListCreation} from '../console-tests.js'
import './todo.css'

const pageContainer = document.querySelector('#page-container');

//dsiplays the names of all todoLists on the homepage
function loadAllTodoLists(){

  const todoListContainer = document.createElement('div');
  todoListContainer.setAttribute('id', 'todo-list-container');
  pageContainer.appendChild(todoListContainer);

  let todoListArray = retrieveAllTodoLists();

  for(let i = 0; i < todoListArray.length; i++){
    createTodoListContainer(todoListArray[i]);
  }

  const addTodoList = document.createElement('div');
  addTodoList.setAttribute('id','add-todo-list');
  addTodoList.textContent = '+';
  todoListContainer.appendChild(addTodoList);

  const todoListDivs = document.querySelectorAll('.todo-container');
  todoListDivs.forEach(todoList => todoList.addEventListener('click', createTodoList));
}

/*creates a contianer for a single todoList, simply displaying its name. The list once clicked displays its content*/
function createTodoListContainer(todoList){

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');
  todoContainer.setAttribute('data-index', todoList.index);

  todoContainer.textContent = todoList.name;
  document.querySelector('#todo-list-container').appendChild(todoContainer);
}

/*Handles the event of clicking a todoList by displaying the list's content*/
function createTodoList(e){

  document.querySelector('#todo-list-container').remove();
  let backButton = createBackButton();

  let index = e.target.dataset.index;
  let todoList = retrieveTodoList(index);
  const todoContainer = document.createElement('div');
  todoContainer.setAttribute('id','todo-items-container');

  for(let i = 0; i < todoList.todo.length; i++){
    todoContainer.appendChild(createTodoItem(todoList.todo[i], i));
  }

  pageContainer.appendChild(todoContainer);
  pageContainer.appendChild(backButton);

}

//provide a button to return to the homepage
function createBackButton(){
  const backButton = document.createElement('button');
  backButton.setAttribute('id','back-button');
  backButton.textContent = 'Back';

  backButton.addEventListener('click', (e) => {
    document.querySelector('#todo-items-container').remove();
    document.querySelector('#back-button').remove();
    loadAllTodoLists();
  });

  return backButton;
}

//Responsible of displaying a single todoItem within a TodoList
function createTodoItem(todoItem, index){

  //create a container for a todoItem in the todoList
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('todo-item');
  todoItemElement.setAttribute('data-index', index);

  //Title property
  const titleElement = document.createElement('input');
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
      'due-date','done'];
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

  return todoItemElement;
}

//testing the view.js module, to be removed later
testTodoListCreation();
loadAllTodoLists();
