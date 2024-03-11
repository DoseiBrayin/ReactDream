import { useState, useEffect } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import EmptyData from '../EmptyData/EmptyData.jsx';

const ShowToDo = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch('https://crudpython.azurewebsites.net/api/Read?');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData().then((data) => {
            setData(data);
            setIsLoading(false);
        });
    }, [refresh]);

    return (
        <div className='show-to-do'>
            <h1>Show To-Do</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : data.length === 0 ? (
                <div className='Empty'>
                    <EmptyData className='Empty' />
                </div>
            ) : (
                <section className="ToDoItems">{
                    data.map((item) => (
                        <ToDoItem
                        refreshParent={() => setRefresh(refresh+1)}
                        key={item.Id}
                        title={item.title}
                        url={item.url}
                        id={item.Id}
                        order={item.order}
                        completed={item.completed} />
                    ))
                }</section>
            )}
        </div>
    );
};

export default ShowToDo;