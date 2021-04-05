import Categories from "./Categories"
import Dashboard from "./Dashboard"
import Information from "./Information"

const Main = () => {
    return (
        <div className="row d-flex vh-100 align-items-center">
            <aside className="col-3 m-5">
                <Information />
                <Categories />
            </aside>
            <article className="col-8">
                <Dashboard />
            </article>
        </div>
    )
}

export default Main
