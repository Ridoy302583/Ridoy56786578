import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center bg-white rounded-lg shadow-sm overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-3 focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-primary hover:bg-secondary text-white px-4 py-3 transition-colors"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </form>
  )
}

export default TodoForm
