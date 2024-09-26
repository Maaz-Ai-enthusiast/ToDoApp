import { useEffect, useRef, useState } from "react";
import TodoItem from "../todoItem/TodoItem";
import todo_icon from "./../../assets/todo_icon.png";

export default function Todo() {
  // 1. Create a ref to access the input field directly without state
  const inputRef = useRef();

  // 2. State to manage the list of to-do items
  const [todoList, setTodoList] = useState(localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []);

  // 3. Function to add a new to-do item
  const add = () => {
    const inputText = inputRef.current.value.trim(); // Get input value and remove extra spaces

    // Check if input is empty
    if (!inputText) {
      return alert("Please enter some task");
    }

    // Create a new to-do object
    const newTodo = {
      id: Date.now(), // Unique ID using current timestamp
      text: inputText, // The text of the to-do item
      isComplete: false, // Initially set to incomplete
    };

    // Update the state to include the new to-do item
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = ""; // Clear the input field
  };

  // 4. Function to delete a to-do item by ID
  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      // Filter out the item that matches the given ID
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle=(id)=>{
setTodoList((prevTodos)=>{
   return prevTodos.map((todo)=>{
       if(todo.id===id){
         return {...todo,isComplete:!todo.isComplete}
       }
       return todo
   })
})
  }

  useEffect(()=>{

// console.log(todoList);

localStorage.setItem("todoList",JSON.stringify(todoList))


  },[todoList])

  // 5. JSX for the Todo component
  return (
    <div className="px-4 bg-white place-self-center w-11/12 max-w-md flex flex-col py-7 min-h-[550px] rounded-xl">
      {/* Header Section */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="todo_icon" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Section */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* List Section */}
      <div>
        {todoList.map((item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}
