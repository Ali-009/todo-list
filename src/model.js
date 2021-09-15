
let project = [];

export function projectFactory(name){

  let projectIndex = localStorage.length;

  //stores a todo in the localStorage in an appropriate project
  function storeTodoItem(todo){

    /*JSON is used here because localStorage only accepts strings. The string stored in localStorage is first retrieved and then fully updated with every call to storeTodoItem*/
    let todoList = [];
    if(localStorage.getItem(projectIndex)){
      todoList = JSON.parse(localStorage.getItem(projectIndex));
    }

    todoList.push(todo);
    localStorage.setItem(projectIndex, JSON.stringify(todoList));

  }

  //retrieving data from localStorage
  function retrieveTodoItem(todoIndex, prop){

  }

  localStorage.setItem(projectIndex, '');
  return {name, storeTodoItem};
}
