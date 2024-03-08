import './ToDoItem.css'; // Asegúrate de tener un archivo CSS con este nombre si quieres agregar estilos
import PropTypes from 'prop-types';

function ToDoItem({ title, url, id, order, completed }) {
    return (
        <article className='ToDoItem'>
            <h2>{title}</h2>
            <a href={url}>{url}</a>
            <span>{id}</span>
            <span>{order}</span>
            <span>{completed ? 'Completed' : 'Not completed'}</span>
            <div className="Buttoms">
                <button className='Edit'>Edit</button>
                <button className='Delete'>Delete</button>
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