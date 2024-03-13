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
    const [data, setData] = useState(null);

    useEffect(() => {
        FindData(id).then((data) => {
            console.log(data);
            if (data) {
                alert('Data found');
                setData(data);
            } else {
                alert('Data not found');
                navigate('/');
            }
        });
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