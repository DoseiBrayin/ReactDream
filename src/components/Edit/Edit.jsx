import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
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
    const Find = useCallback(async () => {
        const result = await FindData(id);
        setData(result[0]);
        setTitle(result[0].title);
        setUrl(result[0].url);
        setOrder(result[0].order);
        setCompleted(result[0].completed);
    }, [id]); // Recrea la función solo si 'id' cambia

    useEffect(() => {
        Find();
    }, [Find]); // Llama a 'fetchData' solo si la función cambia
    console.log(data)


const storeData = async (e) => {
    e.preventDefault()
    const data_edit = {
        Id: data.Id,
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
                        <input type="text" className="form-control" placeholder="Do a Homework" aria-label="Username" aria-describedby="addon-wrapping" defaultValue={data.title} value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Url</span>
                        <input type="text" className="form-control" placeholder="https://www.google.com" aria-label="Username" aria-describedby="addon-wrapping" defaultValue={data.url} value={url} onChange={(e) => setUrl(e.target.value)} required />
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Order</span>
                        <input type="number" className="form-control" placeholder="1" aria-label="Username" aria-describedby="addon-wrapping" defaultValue={data.order} value={order} onChange={(e) => setOrder(e.target.value)} required />
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked={data.completed} checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Completed?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            )}
        </div>
    );
}

export default Edit