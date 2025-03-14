import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <i className="bi bi-list-check text-5xl mb-3 text-gray-300"></i>
        <p>No tasks yet. Add one above!</p>
      </div>
    )
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  )
}

export default TodoList
