import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Category from "./Category"

const Categories = () => {

    const { projects } = useContext(dashboardContextFunc);
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
