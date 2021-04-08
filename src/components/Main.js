import Categories from "./Categories"
import Dashboard from "./Dashboard"
import Information from "./Information"
import "./Main.css"

const Main = () => {
    return (
        <div id="main-div" className="container-fluid d-flex row vh-100 justify-content-center">
            <aside id="aside" className="col-xxl">
                <Information />
                <Categories />
            </aside>
            <article className="col-xxl d-flex flex-wrap justify-content-center align-items-center ">
                <Dashboard />
            </article>
        </div>
    )
}

export default Main
