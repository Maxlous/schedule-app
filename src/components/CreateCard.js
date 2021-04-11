import { RiMenuAddFill } from "react-icons/ri"
import { useContext } from "react";
import { dashboardContextFunc } from "../context/DashboardContext"
import { v4 as uuidv4 } from "uuid"
import "../styles/CreateCard.css";

const CreateCard = () => {

    const { projects, setProjects } = useContext(dashboardContextFunc);

    const createNewProject = () => {
        const newCard = { id: uuidv4(), todos: [], category: "", cardTitle: "", createdOn: new Date() };
        const projectsCopy = [...projects, newCard]
        setProjects(projectsCopy)
    }

    return (
        <div id="create-card">
            <RiMenuAddFill className="card-img-top" size="10em" />
            <div className="card-body d-flex justify-content-center">
                <button id="create-button" onClick={createNewProject} className="btn btn-dark">New Card</button>
            </div>
        </div >
    )
}

export default CreateCard
