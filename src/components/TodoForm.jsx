import { useState } from 'react'
import { useStoreTodo } from '../store/todos';
import './TodoForm.css'

export const TodoForm = ({ onCreate }) => {
  const createTodo = useStoreTodo((state) => state.createTodo)

  const[formData, setFormData] = useState({
    text: 'asf',
    priority: 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((formData) => ({
      ...formData,
      [name]: value
    }))
  }

  return (
  <form 
    onSubmit={(e) => {
      e.preventDefault()
      createTodo(formData)
    }} 
    className="styled-form">
    <label htmlFor='text'>
      Texto
      <input name='text' id='text' value={formData.text} onChange={handleChange} />
    </label>
    <label htmlFor='priority'>
      Prioridad
      <select name='priority' id='priority' value={formData.priority} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </label>
    <button type='submit'>Crear</button>
  </form>
)};
