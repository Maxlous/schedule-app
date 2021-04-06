import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Card from "./Card";
import CreateCard from "./CreateCard"

const Dashboard = () => {

    const { projects } = useContext(dashboardContextFunc);

    return (
        <div className="mt-5 d-flex" style={{ border: "1px solid grey" }}>
            {projects.map((item) => {
                return (
                    <Card key={item.id} cardId={item.id} />
                )
            })}
            <CreateCard />
        </div>
    )
}

export default Dashboard
