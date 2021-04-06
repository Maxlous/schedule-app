import { useContext, useState, useEffect } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import CardTodo from "./CardTodo";
import { RiDeleteBin6Fill } from "react-icons/ri"
import { v4 as uuidv4 } from "uuid"

const Card = ({ cardId }) => {

    const { projects, setProjects } = useContext(dashboardContextFunc);
    const [cardTitle, setCardTitle] = useState("")
    const [todo, setTodo] = useState("")

    let currentCard = projects.filter((item) => item.id === cardId)[0]

    useEffect(() => {
        // eslint-disable-next-line
        currentCard = projects.filter((item) => item.id === cardId)[0];
    })

    const handleTitle = (e) => {
        setCardTitle(val => e.target.value)
    }

    const onTodoInputChange = (e) => {
        setTodo(val => e.target.value)
    }

    const addTodoItem = (e) => {
        e.preventDefault()
        const currentCardTodosCopy = [...currentCard.todos, { id: uuidv4(), name: todo }]
        const currentCardCopy = { ...currentCard, todos: currentCardTodosCopy }
        const withoutCurrentCard = projects.filter((item) => item.id !== cardId);
        const projectsCopy = [...withoutCurrentCard, currentCardCopy];
        setProjects(projectsCopy)
    }

    const deleteCard = () => {
        const currentProjectsCopy = [...projects];
        const withoutCurrentCard = currentProjectsCopy.filter((item) => item.id !== cardId);
        setProjects(withoutCurrentCard)
    }

    return (
        <div className="card" style={{ width: "25rem" }}>
            <RiDeleteBin6Fill onClick={deleteCard} size="1.6em" style={{ cursor: "pointer" }} />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <div className="input-group mb-3">
                    <input onChange={handleTitle} type="text" className="form-control" placeholder="Enter a title..." id="project-title" />
                </div>
                <form className="input" onSubmit={addTodoItem}>
                    <input
                        type="text"
                        onChange={onTodoInputChange}
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
                {currentCard.todos.map((item) => {
                    return (
                        <CardTodo key={item.id} todoText={item.name} todoId={item.id} cardId={cardId} />
                    )
                })}
            </div>
        </div>
    )
}

export default Card
