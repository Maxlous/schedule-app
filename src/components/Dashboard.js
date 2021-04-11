import { useContext, useEffect } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Card from "./Card";
import CreateCard from "./CreateCard"

const Dashboard = () => {

    const { checkedCategories, projects } = useContext(dashboardContextFunc);
    const filteredArray = [];
    //find the relevant cards for checked category
    for (let i = 0; i < checkedCategories.length; i++) {
        for (let j = 0; j < projects.length; j++) {
            if (checkedCategories[i] === projects[j].category.toUpperCase()) {
                filteredArray.push(projects[j])
            }
        }
    }

    const sortByDate = (arr) => {
        arr.sort((a, b) => {
            return new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime();
        });
    };
    //sort checked categories' cards
    let sortedArray = [...filteredArray]
    sortByDate(sortedArray);
    //sort all of them
    let projectsCopy = [...projects]
    sortByDate(projectsCopy)

    useEffect(() => {
        for (let i = 0; i < checkedCategories.length; i++) {
            for (let j = 0; j < projects.length; j++) {
                if (checkedCategories[i] === projects[j].category.toUpperCase()) {
                    filteredArray.push(projects[j])
                }
            }
        }
        //eslint-disable-next-line
        sortedArray = [...filteredArray]
        sortByDate(sortedArray)
        //eslint-disable-next-line
        projectsCopy = [...projects]
        sortByDate(projectsCopy)
    })

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {sortedArray.length > 0 ? sortedArray.map((item) => {
                    return (
                        <Card key={item.id} cardId={item.id} />
                    )
                }) : projectsCopy.map((item) => {
                    return (
                        <Card key={item.id} cardId={item.id} />
                    )
                })}
            </div>
            <CreateCard />
        </>
    )
}

export default Dashboard

