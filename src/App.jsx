//import { useState } from 'react'
import './App.css'

function App() {
  //const [data, setData] = useState([]) 
  const fetchData = async () => {
    const response = await fetch('https://crudpython.azurewebsites.net/api/Read?')
    const data = await response.json()
    console.log(data)
  }
  fetchData()
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order</th>
            <th>Title</th>
            <th>URL</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}

export default App
