import { TiDelete } from "react-icons/ti"
import { GrFormSchedule } from "react-icons/gr"
import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext";
import "../styles/CardTodo.css"

const CardTodo = ({ todoText, todoId, cardId, editMode, overlay }) => {

    const { projects, setProjects } = useContext(dashboardContextFunc);

    const deleteTodoItem = () => {
        const currentProjectsCopy = [...projects];
        const currentCard = currentProjectsCopy.filter((item) => item.id === cardId)[0];
        const updatedTodos = currentCard.todos.filter((item) => item.id !== todoId);
        const withoutCurrentCard = currentProjectsCopy.filter((item) => item.id !== cardId);
        const updatedCard = { ...currentCard, todos: updatedTodos }
        const updatedProject = [...withoutCurrentCard, updatedCard]
        setProjects(updatedProject)
    }

    return (
        <li style={overlay ? { background: "rgba(0,0,0,0.1)" } : null} className=" todo list-group-item d-flex justify-content-between align-items-center mb-2">
            <div className="page__toggle">
                <label className="toggle">
                    <input className="toggle__input" type="checkbox" />
                    <span className="toggle__label">
                    </span>
                </label>
            </div>
            {todoText}
            <div>
                {editMode ? <TiDelete style={{ cursor: "pointer" }} onClick={deleteTodoItem} size="1.6em" /> : <GrFormSchedule size="1.6em" />}
            </div>
        </li>
    )
}

export default CardTodo
