import './EmptyData.css'
import '../../../public/open-box.svg'

function EmptyData() {
    return (
        <div className="EmptyData">
            <img src="open-box.svg" alt="open-box" />
            <h1>You don`t have ToDo`s</h1>
            <p>No data to show</p>
        </div>
    )
}

export default EmptyData