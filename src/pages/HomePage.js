import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <section>
            <div>Hello! this is a todo app and we are happy to see you here!</div>
            <img src="https://c.tenor.com/t6zKtQ38LhAAAAAC/it-is-so-great-to-have-you-here-good-for-you-to-be-here.gif" alt="" />
            <NavLink to="/todo">Get started</NavLink>
        </section>
    )
}

export default HomePage