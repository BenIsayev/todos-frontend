import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { loadTodos, editTodo, deleteTodo, addTodo } from '../store/actions/TodoActions';
import TodoList from '../components/TodoList'
import TodoEditModal from '../components/TodoEditModal';

const TodoPage = () => {
    const dispatch = useDispatch()

    const [isAddShown, setIsAddShown] = useState(false)

    useEffect(() => {
        dispatch(loadTodos())
    }, [dispatch])

    const submitEditTodo = (todo) => {
        dispatch(editTodo(todo))
    }

    const submitDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    const submitAddTodo = (todoTitle) => {
        dispatch(addTodo({
            title: todoTitle,
            isDone: true,
            createdAt: Date.now()
        }))
    }

    const { todos } = useSelector((state) => state.TodoModule)

    return (
        <section>
            {todos.length <= 10 && <button onClick={() => { setIsAddShown(true) }}>Add todo</button>}
            {todos?.length ? <TodoList todos={todos} submitEditTodo={submitEditTodo} deleteTodo={submitDeleteTodo} /> : <div>Loading todos..</div>
            }
            {isAddShown && <TodoEditModal callback={submitAddTodo} closeEdit={() => { setIsAddShown(false) }} />}
        </section>
    )
}

export default TodoPage