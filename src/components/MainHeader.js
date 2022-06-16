import classes from './MainHeader.module.css'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header className={classes["main-header"]}>
            <h1>
                Todos
            </h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/todo">Todos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader