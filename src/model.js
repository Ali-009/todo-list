
/*The model is rewritten to only read and write to localStorage, and do nothing else*/

/*todoList is an object received from either the view or the controller. It has a name, an index and an array of todo objects*/

export function updateTodoList(todoList){
  localStorage.setItem(todoList.index, JSON.stringify(todoList));
}

export function retrieveTodoList(todoListIndex){
  return JSON.parse(localStorage.getItem(todoListIndex));
}

//Creates a new Todo-list
export function todoListFactory(name){

  const index = localStorage.length
  let todo = []; //An array of todoItem objects
  return {index, name, todo};
}

export function todoItemFactory(title = '', description = '',
    dueDate = '', priority = '', checked = ''){

  return {title, description, dueDate, priority, checked};
}
