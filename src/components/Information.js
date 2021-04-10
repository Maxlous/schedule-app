import { useState, useContext } from "react";
import { BsPersonSquare } from "react-icons/bs"
import { dashboardContextFunc } from "../context/DashboardContext";
import "../styles/Information.css"
import { TiArrowLoop } from "react-icons/ti"
import { useHistory } from "react-router-dom";

const Information = () => {

    const [nameInfo] = useState(() => {
        const info = localStorage.getItem("userName");
        return info ? JSON.parse(info) : "No Name"
    })

    const { projects } = useContext(dashboardContextFunc)
    const cardNumber = projects.length;
    const fetchCategories = projects.map((item) => item.category.toUpperCase())
    const uniqueCategoriesNumber = Array.from(new Set(fetchCategories)).length;
    const getTodoItemsNumber = () => {
        let sum = 0;
        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projects[i].todos.length; j++) {
                sum += 1
            }
        }
        return sum
    }
    let todoItemsNumber = getTodoItemsNumber()
    const sortByDate = (arr) => {
        arr.sort((a, b) => {
            return new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime();
        });
    };

    const semanticMonths = {
        "1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June",
        "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"
    }

    const fetchLastCreated = () => {
        let projectsCopy = [...projects]
        sortByDate(projectsCopy)
        let getDate;
        try {
            getDate = projectsCopy[projectsCopy.length - 1].createdOn
        } catch {
            return null
        }
        let lastCreatedCardMonth = JSON.stringify(new Date(getDate).getMonth() + 1)
        let lastCreatedCardDay = JSON.stringify(new Date(getDate).getDate())
        return [lastCreatedCardDay, lastCreatedCardMonth]
    }

    let dayAndMonth = fetchLastCreated()

    const history = useHistory()

    const handleNameChange = () => {
        localStorage.removeItem("userName")
        history.push("/")
    }

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-self-center justify-content-center">
                    <BsPersonSquare className="m-3" size="9em" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 id="info-card-title" className="card-title">{nameInfo} <TiArrowLoop onClick={handleNameChange} style={{ cursor: "pointer" }} size="1.2em" data-bs-toggle="tooltip" data-bs-placement="right" title="change name" />
                        </h5>
                        <p className="card-text">You have {cardNumber} {cardNumber === 0 || cardNumber === 1 ? "card" : "cards"} from {uniqueCategoriesNumber} different {uniqueCategoriesNumber === 0 || uniqueCategoriesNumber === 1 ? "category" : "categories"} with {todoItemsNumber} to-do {todoItemsNumber === 0 || todoItemsNumber === 1 ? "item" : "items"} in total. Cheers!</p>
                        <p className="card-text"><small className="text-muted">{dayAndMonth ? `Last card created on ${dayAndMonth[0]} ${semanticMonths[dayAndMonth[1]]}` : ""}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
