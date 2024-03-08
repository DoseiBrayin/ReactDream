import './ShowToDo.css'

function ShowToDo() {
    return (
        <div className='show-to-do'>
            <h1>Show To-Do</h1>
            <section className="ToDoItems">
                <article className='ToDoItem'>
                    <h2>ToDoItemTitle</h2>
                    <a>ToDoItemURL</a>
                    <span>ToDoItemID</span>
                    <span>ToDoItemOrder</span>
                    <span>ToDoItemCompleted</span>
                    <div className="Buttoms">
                        <button className='Edit'>Edit</button>
                        <button className='Delete'>Delete</button>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ShowToDo