import { createContext, useState } from 'react'

export const dashboardContextFunc = createContext()

const DashboardContext = ({ children }) => {

    const [projects, setProjects] = useState([1, 2]);

    return (
        <dashboardContextFunc.Provider value={{
            projects
        }}>
            {children}
        </dashboardContextFunc.Provider>
    )
}

export default DashboardContext
