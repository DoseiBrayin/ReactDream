import './ShowToDo.css'
import ToDoItem from '../ToDoItem/ToDoItem'
import EmptyData from '../EmptyData/EmptyData'
import { useState, useEffect } from 'react'

function ShowToDo() {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(0)

    const fetchData = async () => {
        const response = await fetch('https://crudpython.azurewebsites.net/api/Read?')
        const data = await response.json()
        return data
    }

    useEffect(() => {
        if (data.length === 0){
            setData([])
        }else{
            fetchData().then(setData);
        }
    }, [refresh]);

    return (
        <div className='show-to-do'>
            <h1>Show To-Do</h1>
            {data.length === 0 ? (
                <div className='Empty'>
                    <EmptyData className='Empty' />
                </div>
            ) : (
                <section className="ToDoItems">{
                    data.map((item) => (
                        <ToDoItem
                        refreshParent={() => setRefresh(refresh+1)}
                        key={item.Id}
                        title={item.title}
                        url={item.url}
                        id={item.Id}
                        order={item.order}
                        completed={item.completed} />
                        ))
                    }
                    </section>
            )}
        </div>
    )
}

export default ShowToDo