import './Edit.css'
import { useParams } from 'react-router-dom'

const FindData = (id) => {
    return fetch(`https://crudpython.azurewebsites.net/api/readId?id=${id}`, {
        method: 'GET',
    }).then((response) => response.json());
}

function Edit() {
    const { id } = useParams();
    FindData(id).then((data) => {
        const jsonResponse = data.split(", ")[1]
        const parsedData = JSON.parse(jsonResponse)
        console.log(parsedData);
    });
    return (
        <div className='Edit'>
            <h2>Edit</h2>
        </div>
    )
}

export default Edit