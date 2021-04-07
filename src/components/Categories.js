import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import Category from "./Category"

const Categories = () => {

    const { projects } = useContext(dashboardContextFunc);
    let fetchCategories = projects.map((item) => item.category.toUpperCase())
    let uniqueCategoryNames = Array.from(new Set(fetchCategories))

    // useEffect(() => {
    //     fetchCategories = projects.map((item) => item.category.toUpperCase());
    //     uniqueCategoryNames = Array.from(new Set(fetchCategories))
    // }, [checkedCategories])

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
