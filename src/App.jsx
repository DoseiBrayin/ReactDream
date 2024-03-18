// import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowToDO from '../src/components/ShowToDo/ShowToDo.jsx'
import Create from '../src/components/Create/Create.jsx'
import Edit from '../src/components//Edit/Edit.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<ShowToDO />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App