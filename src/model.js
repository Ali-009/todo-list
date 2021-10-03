/*The model is rewritten to only read and write to localStorage, and provide todoList and todoItem objects*/

/*todoList is an object received from either the view or the controller. It has a name, an index and an array of todo objects*/

/*This function is used by the controller to update a single todo-list in the localStorage*/
export function updateTodoList(todoList) {
  localStorage.setItem(todoList.index, JSON.stringify(todoList));
}

export function retrieveTodoList(todoListIndex) {
  return JSON.parse(localStorage.getItem(todoListIndex));
}

export function retrieveAllTodoLists() {
  let todoList = [];
  for (let i = 0; i < localStorage.length; i++) {
    todoList[i] = retrieveTodoList(i);
  }
  return todoList;
}

export function removeTodoList(todoListIndex) {
  localStorage.removeItem(todoListIndex);

  //find the item positioned after the removed one and change its index
  //This shifts an item one step backward, after one has been removed
  todoListIndex = parseInt(todoListIndex);

  while (retrieveTodoList(todoListIndex + 1)) {
    let shiftedTodoList = retrieveTodoList(todoListIndex + 1);
    shiftedTodoList.index = todoListIndex;
    updateTodoList(shiftedTodoList);
    localStorage.removeItem(todoListIndex + 1);

    todoListIndex++;
  }
}

//Creates a new Todo-list
export function todoListFactory(name) {
  const index = localStorage.length;
  let todo = []; //An array of todoItem objects
  return { index, name, todo };
}

export function todoItemFactory(
  title = "Title",
  description = "Description",
  dueDate = "",
  priority = "",
  checked = ""
) {
  //set the date to currentDate if no date has been provided
  if (!dueDate) {
    dueDate = findCurrentDate();
  }
  return { title, description, dueDate, priority, checked };
}

function findCurrentDate() {
  const currentDate = new Date();

  /*formatting is required for compatibility with the html date input element*/
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  month > 10 ? month : (month = "0" + month);
  let day = currentDate.getDate();
  day > 10 ? day : (day = "0" + day);

  return `${year}-${month}-${day}`;
}
