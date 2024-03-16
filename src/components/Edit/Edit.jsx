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
            <form className='create-form'>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Title</span>
                    <input type="text" className="form-control" placeholder="Do a Homework" aria-label="Username" aria-describedby="addon-wrapping"  required/>
                </div>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Url</span>
                    <input type="text" className="form-control" placeholder="https://www.google.com" aria-label="Username" aria-describedby="addon-wrapping" required/>
                </div>
                <div className="input-group flex-wrap">
                    <span className="input-group-text" id="addon-wrapping">Order</span>
                    <input type="number" className="form-control" placeholder="1" aria-label="Username" aria-describedby="addon-wrapping" required/>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Completed?</label>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default Edit