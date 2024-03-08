import './NavBar.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ShowToDO from '../ShowToDo/ShowToDo.jsx'

function NavBar() {
  return (
    <BrowserRouter>
    <nav className='navbar'>
      <h1>CRUD</h1>
      <div className='links'>
        <Link to='/'><a>home</a></Link>
        <Link to='/create'>New To-Do</Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<ShowToDO />} />
    </Routes>
    </BrowserRouter>
  )
}

export default NavBar