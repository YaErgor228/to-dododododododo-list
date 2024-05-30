import React from 'react';

function ToDoItem({todos, toggleTodo, deleteTodo}) {
    return (
        <>
        {todos.map((todo) => (
        <li>
        <label>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
            Delete
        </button>
        </li>))}
        </>
    )
}

export default ToDoItem;