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
    console.log(data)
    return (
        <div className='Edit_Name'>
            <h2>Edit</h2>
            <p>{id}</p>
            {data && (
                <form className='create-form'>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Title</span>
                        <input type="text" className="form-control" placeholder="Do a Homework" aria-label="Username" aria-describedby="addon-wrapping" value={data[0].title} required/>
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Url</span>
                        <input type="text" className="form-control" placeholder="https://www.google.com" aria-label="Username" aria-describedby="addon-wrapping" value={data[0].url} required/>
                    </div>
                    <div className="input-group flex-wrap">
                        <span className="input-group-text" id="addon-wrapping">Order</span>
                        <input type="number" className="form-control" placeholder="1" aria-label="Username" aria-describedby="addon-wrapping" value={data[0].order} required/>
                    </div>
                    {/* ... */}
                </form>
            )}
        </div>
    );
}

export default Edit