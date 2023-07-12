import DashboardStyles from "./_userDashboardLayout.module.scss"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faHouseUser, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {

    return (
        <aside className={DashboardStyles.dashboard__sidebar}>
            <ul>
                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="/">
                        <FontAwesomeIcon icon={faHouseUser} /> <span>Home</span>
                    </NavLink>
                </li>

                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="#createPost">
                        <FontAwesomeIcon icon={faCirclePlus} /> <span>Create Post</span>
                    </NavLink>
                </li>
                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="#profile">
                        <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
                    </NavLink>
                </li>
                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="#logout">
                        <FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span>
                    </NavLink>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar