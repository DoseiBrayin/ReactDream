import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]) 

  const fetchData = async () => {
    const response = await fetch('https://crudpython.azurewebsites.net/api/Read?')
    const data = await response.json()
    console.log("Data: ", data)
    return data
  }

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className='container-md'>
    <table className='table table-dark'>
        <thead>
          <tr>
            <th className='col'>ID</th>
            <th className='col'>Order</th>
            <th className='col'>Title</th>
            <th className='col'>URL</th>
            <th className='col'>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.order}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App