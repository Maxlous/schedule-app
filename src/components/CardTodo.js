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
    //when todo item is checked or unchecked update the relevant cards data accordingly
    const handleCheck = () => {
        const currentProjectsCopy = [...projects];
        const currentCard = currentProjectsCopy.filter((item) => item.id === cardId)[0];
        const currentTodo = currentCard.todos.filter((item) => item.id === todoId)[0];
        let checkedStatus;
        if (currentTodo.isChecked) {
            checkedStatus = false;
        } else {
            checkedStatus = true
        }
        const withoutCurrentCard = currentProjectsCopy.filter((item) => item.id !== cardId);
        const withoutCurrentTodo = currentCard.todos.filter((item) => item.id !== todoId);
        const updatedTodo = { ...currentTodo, isChecked: checkedStatus }
        const updatedTodos = [...withoutCurrentTodo, updatedTodo]
        const updatedCard = { ...currentCard, todos: updatedTodos }
        const updatedProject = [...withoutCurrentCard, updatedCard]
        setProjects(updatedProject)
    }
    //get current todo is whether checked or not
    const getStatus = () => {
        const currentProjectsCopy = [...projects];
        const currentCard = currentProjectsCopy.filter((item) => item.id === cardId)[0];
        const currentTodo = currentCard.todos.filter((item) => item.id === todoId)[0];
        if (currentTodo.isChecked) {
            return true
        } else {
            return false
        }
    }
    const status = getStatus();

    return (
        <li style={overlay ? { background: "rgba(0,0,0,0.1)" } : null} className=" todo list-group-item d-flex justify-content-between align-items-center mb-2">
            <div className="page__toggle">
                <label className="toggle">
                    {status ?
                        <input onChange={handleCheck} className="toggle__input" type="checkbox" defaultChecked />
                        : <input onChange={handleCheck} className="toggle__input" type="checkbox" />
                    }
                    <span className="toggle__label"></span>
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
