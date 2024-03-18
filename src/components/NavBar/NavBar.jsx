import './NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav className='navbar'>
      <h1>CRUD</h1>
      <div className='links'>
        <Link to='/'><a>home</a></Link>
        <Link to='/create'>New To-Do</Link>
      </div>
    </nav>
  )
}

export default NavBar