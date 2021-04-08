import { RiMenuAddFill } from "react-icons/ri"
import { useContext } from "react";
import { dashboardContextFunc } from "../context/DashboardContext"
import { v4 as uuidv4 } from "uuid"

const CreateCard = () => {

    const { projects, setProjects } = useContext(dashboardContextFunc);

    const createNewProject = () => {
        const newCard = { id: uuidv4(), todos: [], category: "", cardTitle: "", createdOn: new Date() };
        const projectsCopy = [...projects, newCard]
        setProjects(projectsCopy)
    }

    return (
        <div style={{
            width: "20rem", height: "25rem", border: "none", marginTop: "9em"
        }}>
            <RiMenuAddFill className="card-img-top" size="10em" />
            <div className="card-body d-flex justify-content-center">
                <button style={{ width: "5em", height: "4em" }} onClick={createNewProject} className="btn btn-dark">New Card</button>
            </div>
        </div >
    )
}

export default CreateCard
