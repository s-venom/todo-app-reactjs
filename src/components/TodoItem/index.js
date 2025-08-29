// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
