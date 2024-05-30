import React, {useState, useEffect} from 'react';
import './index.css';
import NewToDoForm from './components/NewToDoForm';
import ToDoItem from './components/ToDoItem';

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) {
      return []
    } else {
      return JSON.parse(localValue)
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function hundleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: crypto.randomUUID(), 
      title: newItem, 
      completed: false
    }])
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed}
        } else {
          return todo
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
       return currentTodos.filter((todo) => (todo.id !== id))
    })
  }
  
  return (
    <div className="App">
      <NewToDoForm  newItem={newItem} setNewItem={setNewItem} hundleSubmit={hundleSubmit}/>
      <h1 className='header'>Todo List</h1>
      <ToDoItem  todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;
