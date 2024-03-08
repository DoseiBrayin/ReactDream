import './NavBar.css'
import {BrowserRouter, Link} from 'react-router-dom'

function NavBar() {
  return (
    <BrowserRouter>
    <nav className='navbar'>
      <h1>CRUD</h1>
      <div className='links'>
        <Link to='/'><a>home</a></Link>
        <Link to='/create'>New Blog</Link>
      </div>
    </nav>
    </BrowserRouter>
  )
}

export default NavBar