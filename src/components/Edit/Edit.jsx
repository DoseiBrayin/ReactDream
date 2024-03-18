import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const FindData = async (id) => {
    const response = await fetch(`https://crudpython.azurewebsites.net/api/readId?id=${id}`)
    const data = await response.json()
    return data
}

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate()

    const [data, setData] = useState(null);
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [order, setOrder] = useState('')
    const [completed, setCompleted] = useState(false)

    const dataRequired = async () => {
        const result = await FindData(id);
        setData(result);
        setData(result[0]);
        setTitle(result[0].title);
        setUrl(result[0].url);
        setOrder(result[0].order);
        setCompleted(result[0].completed);
    };
    dataRequired();
    console.log(data)


const storeData = async (e) => {
    e.preventDefault()
    const data_edit = {
        Id: data[0].Id,
        order: order,
        title: title,
        url: url,
        completed: completed
    }
    await fetchData(data_edit)
}

const fetchData = async (data_edit) => {
    const response = await fetch('https://crudpython.azurewebsites.net/api/Upsert?', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_edit)
    })
    console.log(response.json())
    if (!response.ok) {
        MySwal.fire({
            title: "Error!",
            text: "Error to edit To-Do",
            icon: "error",
            button: "Ok",
            timer: 5000
        })
        navigate('/')
    }
    else {
        MySwal.fire({
            title: "Success!",
            text: "To-Do edited successfully",
            icon: "success",
            button: "Ok",
            timer: 5000
        })
        navigate('/')
    }
}

    return (
        <div className='Edit_Name'>
            <h2>Edit</h2>
            <p>{id}</p>
            {data && (
                <form className='create-form' onSubmit={storeData}>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Title</span>
                        <input type="text" className="form-control" placeholder="Do a Homework" aria-label="Username" aria-describedby="addon-wrapping" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Url</span>
                        <input type="text" className="form-control" placeholder="https://www.google.com" aria-label="Username" aria-describedby="addon-wrapping" value={url} onChange={(e) => setUrl(e.target.value)} required />
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Order</span>
                        <input type="number" className="form-control" placeholder="1" aria-label="Username" aria-describedby="addon-wrapping" value={order} onChange={(e) => setOrder(e.target.value)} required />
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={completed} onChange={(e) => setCompleted(e.target.checked)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Completed?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            )}
        </div>
    );
}

export default Edit