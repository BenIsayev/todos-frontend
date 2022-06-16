import { useState } from 'react'
import TodoEditModal from './TodoEditModal'

import classes from './TodoPreview.module.css'

const TodoPreview = ({ todo, submitEditTodo, deleteTodo }) => {

    const [isEditShown, setIsEditShown] = useState(false)

    const openEditModal = () => {
        setIsEditShown(true)
    }

    const editTodo = (editedTodoText) => {
        console.log(editedTodoText);
        submitEditTodo({
            ...todo,
            title: editedTodoText
        })
    }

    return (
        <li>
            <div>
                {todo.title}
            </div>
            <div className={classes.actions}>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                <button onClick={openEditModal}>Edit</button>
            </div>
            {isEditShown && <TodoEditModal id={todo._id} closeEdit={() => setIsEditShown(false)} callback={editTodo} />}
        </li>
    )
}

export default TodoPreview