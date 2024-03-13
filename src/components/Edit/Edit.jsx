import './Edit.css'
import { useParams, useNavigate } from 'react-router-dom'



const FindData = (id) => {
    return fetch(`https://crudpython.azurewebsites.net/api/readId?id=${id}`, {
        method: 'GET',
    }).then((response) => response.json());
}

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    FindData(id).then((data) => {
        console.log(data);
        if (data) {
            alert('Data found');
            navigate(`/edit/${id}`);
        } else {
            alert('Data not found');
            navigate('/');
        }
    });
    return (
        <div className='Edit'>
            <h2>Edit</h2>
        </div>
    )
}

export default Edit