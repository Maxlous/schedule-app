import { RiMenuAddFill } from "react-icons/ri"
import { useContext } from "react";
import { dashboardContextFunc } from "../context/DashboardContext"
import { v4 as uuidv4 } from "uuid"

const CreateCard = () => {

    const { projects, setProjects } = useContext(dashboardContextFunc);

    const createNewProject = () => {
        const newCard = { id: uuidv4(), todos: [] };
        const projectsCopy = [...projects, newCard]
        setProjects(projectsCopy)
    }

    return (
        <div className="card" style={{ width: "25rem" }}>
            <RiMenuAddFill className="card-img-top" size="10em" />
            <div className="card-body d-flex justify-content-center">
                <button onClick={createNewProject} className="btn btn-dark">Create New</button>
            </div>
        </div>
    )
}

export default CreateCard
