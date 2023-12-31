import { Outlet, NavLink } from "react-router-dom"
import routes from "../../routes"

const Dashboard = () => {
    const [{ children: subRoutes }] = routes

    return (
        <>
            <div className="topbar">
                <h1>Dashboard</h1>
            </div>
            <div className="container">
                <div className="sidebar">
                    <ul className="links">
                        {subRoutes?.map((subRoute) => (
                            <NavLink
                                to={`/${subRoute.path}`}
                                key={subRoute.path}
                            >
                                <li>{subRoute.id}</li>
                            </NavLink>
                        ))}
                    </ul>
                </div>

                <div className="main-section">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
