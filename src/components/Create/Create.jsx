import './Create.css'
import { useState } from 'react'

function Create() {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [order, setOrder] = useState('')
    const [completed, setCompleted] = useState(false)

    const storeData = async (e) => {
        e.preventDefault()
        const data = {
            Id: Math.random().toString(36).substring(7),
            order: order,
            title: title,
            url: url,
            completed: completed
        }
        await fetchData(data)
    }

    const fetchData = async (data) => {
        const response = await fetch('https://crudpython.azurewebsites.net/api/Upsert?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(!response.ok) {
            console.log("Error: ", response.statusText)
            return
        }
        else {
            const result = await response.json()
            console.log("Data: ", result)
        }
    }

    return (
        <div className='create'>
            <h1>Create To-Do</h1>
            <form className='create-form' onSubmit={storeData}>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Title</span>
                    <input type="text" className="form-control" placeholder="Do a Homework" aria-label="Username" aria-describedby="addon-wrapping" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Url</span>
                    <input type="text" className="form-control" placeholder="https://www.google.com" aria-label="Username" aria-describedby="addon-wrapping" value={url} onChange={(e) => setUrl(e.target.value)} required/>
                </div>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Order</span>
                    <input type="number" className="form-control" placeholder="1" aria-label="Username" aria-describedby="addon-wrapping" value={order} onChange={(e) => setOrder(e.target.value)} required/>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={completed} onChange={(e) => setCompleted(e.target.value)}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Completed?</label>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default Create