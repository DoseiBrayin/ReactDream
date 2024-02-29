import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]) 
  const fetchData = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://crudpython.azurewebsites.net/api/Read?'
    const response = await fetch(proxyUrl + targetUrl)
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
