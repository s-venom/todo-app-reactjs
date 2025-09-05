// src/components/TodoItem/index.js
import {useState} from 'react'
import './index.css'

const TodoItem = ({todo, onDelete, onToggleCompletion, onUpdateTitle}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      onUpdateTitle(todo.id, editedTitle.trim())
      setIsEditing(false)
    }
  }

  const handleToggleEdit = () => {
    if (isEditing) {
      handleSave()
    } else {
      setIsEditing(true)
      setEditedTitle(todo.title)
    }
  }

  const handleCheckboxChange = () => {
    onToggleCompletion(todo.id)
  }

  const todoTitleClass = todo.isCompleted
    ? 'todo-title completed-todo'
    : 'todo-title'
  const buttonText = isEditing ? 'Save' : 'Edit'
  const buttonClass = isEditing ? 'save-button' : 'edit-button'

  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.isCompleted}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <input
            type="text"
            className="edit-todo-input"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
          />
        ) : (
          <p className={todoTitleClass}>{todo.title}</p>
        )}
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className={buttonClass}
          onClick={handleToggleEdit}
        >
          {buttonText}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
