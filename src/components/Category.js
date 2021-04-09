import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import "../styles/Category.css"
const Category = ({ categoryName }) => {

    const { checkedCategories, setCheckedCategories } = useContext(dashboardContextFunc);

    const handleCheck = (e) => {
        const categoriesArray = [...checkedCategories];
        if (e.target.checked) {
            categoriesArray.push(e.target.value)
            setCheckedCategories(val => categoriesArray)
        } else {
            const updatedCategoriesArray = categoriesArray.filter((item) => item !== e.target.value);
            setCheckedCategories(val => updatedCategoriesArray)
        }
    }

    return (
        <li className="list-group-item border-0 mt-3 gm-effect">
            <input onChange={handleCheck} className="form-check-input me-3 category-checkbox" type="checkbox" value={categoryName} aria-label={categoryName} style={{ cursor: "pointer" }} />
            {categoryName}
        </li>
    )
}

export default Category
