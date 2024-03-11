import './ToDoItem.css'; 
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function ToDoItem({ title, url, id, order, completed }) {
    return (
        <article className='ToDoItem' data-id={id}>
            <h2>{title}</h2>
            <a href={url}>{url}</a>
            <span>{order}</span>
            <span>{completed ? 'Completed' : 'Not completed'}</span>
            <div className="Buttoms">
                <button className='Edit'>Edit</button>
                <button className='Delete' onClick={()=>{
                    MySwal.fire({
                        title: 'Are you sure?',
                        text: 'You will not be able to recover this ToDo!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                    })
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
};

export default ToDoItem;