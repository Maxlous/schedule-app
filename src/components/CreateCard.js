import { RiMenuAddFill } from "react-icons/ri"
import { useContext } from "react";
import { dashboardContextFunc } from "../context/DashboardContext"

const CreateCard = () => {

    const { projects } = useContext(dashboardContextFunc);

    return (
        <div className="card" style={{ width: "25rem" }}>
            <RiMenuAddFill className="card-img-top" size="10em" />
            <div className="card-body d-flex justify-content-center">
                <button onClick={() => console.log(projects)} className="btn btn-dark">Create New</button>
            </div>
        </div>
    )
}

export default CreateCard
