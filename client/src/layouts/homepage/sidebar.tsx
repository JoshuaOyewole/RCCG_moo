import DashboardStyles from "./_userDashboardLayout.module.scss"
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faHouseUser, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('profilePicture');
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <aside className={DashboardStyles.dashboard__sidebar}>
            <ul>
                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="/">
                        <FontAwesomeIcon icon={faHouseUser} /> <span>Home</span>
                    </NavLink>
                </li>

                <li className={DashboardStyles.sidebar__navItem}>
                    <NavLink className={DashboardStyles.sidebar__navLink} to="#refreshPost">
                        <FontAwesomeIcon icon={faCirclePlus} /> <span>Refresh Post</span>
                    </NavLink>
                </li>
                <li className={DashboardStyles.sidebar__navItem}>
                    <button className={DashboardStyles.sidebar__navLink} style={{background:'none'}} onClick={() => logout()}>
                        <FontAwesomeIcon icon={faRightFromBracket} /> <span>Logout</span>
                    </button>

                </li>
            </ul>

        </aside>
    )
}

export default Sidebar