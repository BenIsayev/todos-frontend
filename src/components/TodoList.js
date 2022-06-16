import TodoPreview from './TodoPreview'

const TodoList = ({ todos, submitEditTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => <TodoPreview todo={todo} key={todo._id} submitEditTodo={submitEditTodo} deleteTodo={deleteTodo} />)}
        </ul>
    )
}

export default TodoList