import './ShowToDo.css'
import ToDoItem from '../ToDoItem/ToDoItem'

function ShowToDo() {
    return (
        <div className='show-to-do'>
            <h1>Show To-Do</h1>
            <section className="ToDoItems">
                <ToDoItem title='Title' url='Url' id='Id' order='Order' completed={true} />
                <ToDoItem title='Title' url='Url' id='Id' order='Order' completed={false} />
                <ToDoItem title='Title' url='Url' id='Id' order='Order' completed={true} />
                <ToDoItem title='Title' url='Url' id='Id' order='Order' completed={false} />
            </section>
        </div>
    )
}

export default ShowToDo