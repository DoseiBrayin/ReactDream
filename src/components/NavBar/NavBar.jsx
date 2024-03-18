import './NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='linksH1' >CRUD</Link>
      <div className='links'>
        <Link to='/'>home</Link>
        <Link to='/create'>New To-Do</Link>
      </div>
    </nav>
  )
}

export default NavBar