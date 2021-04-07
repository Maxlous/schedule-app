import { createContext, useState } from 'react'

export const dashboardContextFunc = createContext()

const DashboardContext = ({ children }) => {

    const [projects, setProjects] = useState(() => {
        const scheduleAppStorage = localStorage.getItem("schedule-app-dashboard");
        return scheduleAppStorage ? JSON.parse(scheduleAppStorage) : []
    });

    const [checkedCategories, setCheckedCategories] = useState([])

    return (
        <dashboardContextFunc.Provider value={{
            projects, setProjects, checkedCategories, setCheckedCategories
        }}>
            {children}
        </dashboardContextFunc.Provider>
    )
}

export default DashboardContext
// [{ id: Number, todos: [{ id: Number, name: "" }] }]