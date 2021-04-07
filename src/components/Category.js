import { useContext } from "react"
import { dashboardContextFunc } from "../context/DashboardContext"

const Category = ({ categoryName }) => {

    const { checkedCategories, setCheckedCategories } = useContext(dashboardContextFunc);

    const handleCheck = (e) => {
        const categoriesArray = [...checkedCategories];
        if (e.target.checked) {
            categoriesArray.push(e.target.value)
            setCheckedCategories(val => categoriesArray)
            // console.log(categoriesArray, checkedCategories)
        } else {
            const updatedCategoriesArray = categoriesArray.filter((item) => item !== e.target.value);
            setCheckedCategories(val => updatedCategoriesArray)
            // console.log(updatedCategoriesArray, checkedCategories)
        }
    }

    return (
        <li className="list-group-item mt-3">
            <input onChange={handleCheck} className="form-check-input me-3" type="checkbox" value={categoryName} aria-label={categoryName} />
            {categoryName}
        </li>
    )
}

export default Category
