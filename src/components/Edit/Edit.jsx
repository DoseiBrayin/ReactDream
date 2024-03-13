import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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

    return (
        <div className='Edit'>
            <h2>Edit</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti necessitatibus praesentium odit earum sit,
                ducimus quod sapiente magni eum. Et rerum ipsam autem
                error quisquam ab sequi impedit. Praesentium, error.

            </p>
        </div>
    )
}

export default Edit