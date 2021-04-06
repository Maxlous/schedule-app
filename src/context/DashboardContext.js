import { createContext, useState } from 'react'

export const dashboardContextFunc = createContext()

const DashboardContext = ({ children }) => {

    const [projects, setProjects] = useState([]);

    return (
        <dashboardContextFunc.Provider value={{
            projects, setProjects
        }}>
            {children}
        </dashboardContextFunc.Provider>
    )
}

export default DashboardContext
// [{ id: Number, todos: [{ id: Number, name: "" }] }]