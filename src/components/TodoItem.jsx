function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="bg-white rounded-lg shadow-sm mb-3 overflow-hidden">
      <div className="flex items-center p-3">
        <button 
          onClick={() => toggleTodo(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
            todo.completed ? 'bg-primary border-primary' : 'border-gray-300'
          }`}
        >
          {todo.completed && <i className="bi bi-check text-white text-sm"></i>}
        </button>
        
        <span 
          className={`flex-grow ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
        
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoItem
