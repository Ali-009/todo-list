
let project = [];

export function projectFactory(name){

  let todoList = [];

  //receives todo object from controller.js and pushes to a todoList in one project
  function storeTodoItem(todo){

    //pushing todo item into an array
    this.todoList.push(todo);

    //extracting properties from the given todo item
    for(let prop in todo){
      //Because localStorage does not support objects, we're creating our own keys to each value
      let key = `${this.name}.todo${this.todoList.length - 1}.${prop}`
      localStorage.setItem(key, todo[prop]);
    }
  }

  return {name, storeTodoItem, todoList};
}
