import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Category from "./Category"

const Categories = () => {

    const { projects } = useContext(dashboardContextFunc);
    //get all the categories in uppercase and save only the unique ones to a variable so that can show in categories
    const fetchCategories = projects.map((item) => item.category.toUpperCase())
    const uniqueCategoryNames = Array.from(new Set(fetchCategories))

    return (
        <ul className="list-group">
            {
                uniqueCategoryNames.map((item, index) => {
                    return (
                        <Category key={index} categoryName={item} />
                    )
                })
            }
        </ul>
    )
}
export default Categories
