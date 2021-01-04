/* Start the app with an alert that asks "What would you like to do?"
-If they enter "new" send a new alert that says "Enter new todo"
~Whatever is entered should be added to a new array. Keep giving them the choice to add new things to the list until they say "quit"
-If they enter "list" print the all of the todos to the console, including the index, which will be needed to delete.
-If they enter "delete" send a new alert asking them which todo should be delted. They will enter an index and we will delete the list item at that index.
*/

let todoStart = prompt('What would you like to do?');
let todoList =[]


if(todoStart === 'new'){
let addTodos = prompt('Enter new todo');
while(addTodos !== 'quit'){
  todoList.push(addTodos);
  addTodos = prompt('Enter new todo');
  if(addTodos === 'list'){
    console.log(todoList) 
    break;
  } 
  if(addTodos === 'delete'){
    console.log(todoList)
    let deleteTodos = prompt('Enter the todo you wish to delete (index number)');
    todoList.splice(deleteTodos, 1);
    console.log(todoList)
    break;
  }

}
}