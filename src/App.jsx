// import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowToDO from './components/ShowToDo/ShowToDo.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  /*const [data, setData] = useState([]) 

  const fetchData = async () => {
    const response = await fetch('https://crudpython.azurewebsites.net/api/Read?')
    const data = await response.json()
    console.log("Data: ", data)
    return data
  }

  useEffect(() => {
    fetchData().then(setData);
  }, []);*/

  return (
    <div className='container'>
      <NavBar />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowToDO />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App