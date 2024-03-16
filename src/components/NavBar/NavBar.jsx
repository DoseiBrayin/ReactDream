import './NavBar.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ShowToDO from '../ShowToDo/ShowToDo.jsx'
import Create from '../Create/Create.jsx'
import Edit from '../Edit/Edit.jsx'

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
      <Route path='/create' element={<Create />} />
      <Route path='/edit' element={<Edit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default NavBar