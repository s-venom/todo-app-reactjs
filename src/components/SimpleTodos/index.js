import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Buy groceries',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Complete the project',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Complete the assignment',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Book a train ticket',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Buy food items',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Complete the class',
    isCompleted: false,
  },
  {
    id: 8,
    title: 'Complete the exam',
    isCompleted: false,
  },
]

const SimpleTodos = () => {
  const [todosList, setTodosList] = useState(initialTodosList)
  const [newTodoInput, setNewTodoInput] = useState('')

  const addTodo = () => {
    const inputParts = newTodoInput.trim().split(' ')
    const lastPart = inputParts[inputParts.length - 1]
    const num = parseInt(lastPart, 10)

    let title = newTodoInput.trim()
    let numToAdd = 1

    // Check if the input ends with a number
    if (!num && inputParts.length > 1) {
      title = inputParts.slice(0, -1).join(' ')
      numToAdd = num
    }

    if (title === '') return

    const newTodos = []
    for (let i = 0; i < numToAdd; i += 1) {
      const newTodo = {
        id: uuidv4(),
        title,
        isCompleted: false,
      }
      newTodos.push(newTodo)
    }
    setTodosList([...todosList, ...newTodos])
    setNewTodoInput('')
  }

  const deleteTodo = id => {
    setTodosList(todosList.filter(todo => todo.id !== id))
  }

  const toggleTodoCompletion = id => {
    setTodosList(
      todosList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    )
  }

  const updateTodoTitle = (id, newTitle) => {
    setTodosList(
      todosList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    )
  }

  return (
    <div className="todos-app-container">
      <div className="todos-container">
        <h1 className="todos-heading">Simple Todos</h1>
        <div className="add-todo-container">
          <input
            type="text"
            className="add-todo-input"
            value={newTodoInput}
            onChange={e => setNewTodoInput(e.target.value)}
            placeholder="Enter todo title..."
          />
          <button type="button" className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="todo-list">
          {todosList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggleCompletion={toggleTodoCompletion}
              onUpdateTitle={updateTodoTitle}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodos
