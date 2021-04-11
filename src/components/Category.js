import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"
import "../styles/Category.css"
const Category = ({ categoryName }) => {

    const { projects, checkedCategories, setCheckedCategories } = useContext(dashboardContextFunc);
    //find how many card belong to that particular category
    const fromThisCategory = () => {
        let sum = 0;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].category.toUpperCase() === categoryName) sum += 1
        }
        return sum
    }
    //save the data to a variable
    const numberFromThisCategory = fromThisCategory();
    //find which categories are selected
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
        <li className="list-group-item border-0 mt-3 cat-list-item gm-effect d-flex flex-row justify-content-between align-items-center">
            <input onChange={handleCheck} className="form-check-input me-3 category-checkbox" type="checkbox" value={categoryName} aria-label={categoryName} />
            {categoryName}<span className="badge category-badge ">{numberFromThisCategory}</span>
        </li>
    )
}

export default Category
