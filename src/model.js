
/*The model is rewritten to only read and write to localStorage, and provide todoLIst and todoItem objects*/

/*todoList is an object received from either the view or the controller. It has a name, an index and an array of todo objects*/

/*This function is used by the controller to update a single todo-list in the localStorage*/
export function updateTodoList(todoList){
  localStorage.setItem(todoList.index, JSON.stringify(todoList));
}

export function retrieveTodoList(todoListIndex){
  return JSON.parse(localStorage.getItem(todoListIndex));
}

export function removeTodoList(todoListIndex){
  localStorage.removeItem(todoListIndex);

  //find the item positioned after the removed one and change its index
  //This shifts an item one step backward, after one has been removed
  if(retrieveTodoList(todoListIndex + 1)){
    let shiftedTodoList = retrieveTodoList(todoListIndex + 1)
        .index = todoListIndex;
    updateTodoList(shiftedTodoList);
    localStorage.removeItem(todoListIndex + 1);
  }
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
