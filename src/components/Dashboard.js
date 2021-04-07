import { useContext, useEffect } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Card from "./Card";
import CreateCard from "./CreateCard"

const Dashboard = () => {

    const { checkedCategories, projects } = useContext(dashboardContextFunc);
    let filteredArray = [];

    for (let i = 0; i < checkedCategories.length; i++) {
        for (let j = 0; j < projects.length; j++) {
            if (checkedCategories[i] === projects[j].category.toUpperCase()) {
                filteredArray.push(projects[j])
            }
        }
    }

    useEffect(() => {
        for (let i = 0; i < checkedCategories.length; i++) {
            for (let j = 0; j < projects.length; j++) {
                if (checkedCategories[i] === projects[j].category.toUpperCase()) {
                    filteredArray.push(projects[j])
                }
            }
        }
    })

    return (
        <div className="mt-5 d-flex" style={{ border: "1px solid grey" }}>
            {filteredArray.length > 0 ? filteredArray.map((item) => {
                return (
                    <Card key={item.id} cardId={item.id} />
                )
            }) : projects.map((item) => {
                return (
                    <Card key={item.id} cardId={item.id} />
                )
            })}
            <CreateCard />
        </div>
    )
}

export default Dashboard

