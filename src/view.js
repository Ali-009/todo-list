import {todoListFactory, todoItemFactory, updateTodoList, retrieveTodoList, retrieveAllTodoLists, removeTodoList} from './model.js';

import {testTodoListCreation} from '../console-tests.js'
import './todo.css'

const pageContainer = document.querySelector('#page-container');
const todoListContainer = document.querySelector('#todo-list-container');

function refreshPage(){
  let todoListArray = retrieveAllTodoLists();

  for(let i = 0; i < todoListArray.length; i++){
    createTodoListDiv(todoListArray[i]);
  }
}



function createTodoListDiv(todoList){

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');

  todoContainer.textContent = todoList.name;
  todoListContainer.appendChild(todoContainer);
}

//testing the view.js module
testTodoListCreation();
refreshPage();
localStorage.clear();
