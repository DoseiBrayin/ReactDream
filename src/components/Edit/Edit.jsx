import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'

const FindData = async (id) => {
    const response = await fetch(`https://crudpython.azurewebsites.net/api/readId?id=${id}`)
    const data = await response.json()
    return data
}

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        FindData(id).then(setData);
    }, [id, navigate]);

    const SubmitData = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const url = form.url.value;
        const order = form.order.value;
        const completed = form.completed.checked;
        const response = await fetch('https://crudpython.azurewebsites.net/api/Upsert?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data[0].Id,
                title,
                url,
                order,
                completed,
            }),
        });
        if(response.ok) {
            navigate('/')
        }
        else {
            console.log('Error');
        }
    }

    return (
        <div className='Edit'>
            <h2>Edit</h2>
                <form onSubmit={SubmitData}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                    <label htmlFor="url">URL</label>
                    <input type="text" id="url" name="url"  required />
                    <label htmlFor="order">Order</label>
                    <input type="number" id="order" name="order" required />
                    <label htmlFor="completed">Completed</label>
                    <input type="checkbox" id="completed" name="completed"/>
                    <button type="submit">Save</button>
                </form>
        </div>
    )
}

export default Edit