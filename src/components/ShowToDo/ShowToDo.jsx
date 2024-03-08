import './ShowToDo.css'
import ToDoItem from '../ToDoItem/ToDoItem'
import {useState, useEffect} from 'react'

function ShowToDo() {
    const [data,setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://crudpython.azurewebsites.net/api/Read?')
        const data = await response.json()
        return data
      }
    
      useEffect(() => {
        fetchData().then(setData);
      }, []);

    return (
        <div className='show-to-do'>
            <h1>Show To-Do</h1>
            <section className="ToDoItems">
                {data.map((item) => (
                    <ToDoItem key={item.Id} 
                    title={item.title} 
                    url={item.url} 
                    id={item.Id} 
                    order={item.order} 
                    completed={item.completed}/>
                ))}
            </section>
        </div>
    )
}

export default ShowToDo