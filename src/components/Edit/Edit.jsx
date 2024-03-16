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
        </div>
    )
}

export default Edit