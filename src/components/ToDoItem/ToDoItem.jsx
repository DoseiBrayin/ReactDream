import './ToDoItem.css';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

const MySwal = withReactContent(Swal);

function ToDoItem({ title, url, id, order, completed, refreshParent}) {
    return (
        <article className='ToDoItem' data-id={id}>
            <h2>{title}</h2>
            <a href={url}>{url}</a>
            <span>{order}</span>
            <span>{completed ? 'Completed' : 'Not completed'}</span>
            <div className="Buttoms">
                <Link to={`/edit/${id}`} className='Edit'>Edit</Link>
                <button className='Delete' onClick={() => {
                    MySwal.fire({
                        title: 'Are you sure?',
                        text: 'You will not be able to recover this ToDo!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            fetch(`https://crudpython.azurewebsites.net/api/delete?id=${id}`, {
                                method: 'GET',
                            }).then(() => {
                                MySwal.fire('Deleted!', 'Your ToDo has been deleted.', 'success');
                                refreshParent();
                            });
                        }
                    });
                }}>Delete</button>
            </div>
        </article>
    );
}

ToDoItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    refreshParent: PropTypes.func.isRequired,
};

export default ToDoItem;