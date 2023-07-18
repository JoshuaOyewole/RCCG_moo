import DashboardStyles from "./_userDashboardLayout.module.scss"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
//import { userType } from "../../util/types";



type HomepageProps = {
    children: React.ReactNode;
}


function HomepageLayout(props: HomepageProps) {
    const { children } = props;
    const { firstname, lastname, profilePicture } = useContext(UserContext);//User context

    return (
        <div className={DashboardStyles.dashboard__container}>
            {/* HEADER SECTION (TOP NAVBAR) */}
            <header className={DashboardStyles.dashboard__header}>
                <div className={DashboardStyles.dashboard__logoContainer}>
                    <NavLink to="/" className="logoCobt">
                        <img
                            src={logo}
                            alt="Dixre Logo"
                            className={DashboardStyles.dashboard__logo}
                        />
                    </NavLink>
                </div>

                <div className={DashboardStyles.dashboard__headerNavWrapper}>
                    <button className={DashboardStyles.userProfile__icon}>
                        <FontAwesomeIcon icon={faBell} className={DashboardStyles.userProfile__bellIcon} />
                    </button>
                    <div className={DashboardStyles.userProfile__container}>

                        <img src={profilePicture ? profilePicture : ""} alt={`${firstname} profile picture`} className={DashboardStyles.userProfile__picture} />

                        <h4 className={DashboardStyles.userProfile__userName}>{firstname} {lastname?.slice(0, 1)}</h4>
                        <button className={DashboardStyles.userProfile__icon}>
                            <FontAwesomeIcon
                                icon={faCaretDown}
                            />
                        </button>
                    </div>
                </div>
            </header>

            <div className={DashboardStyles.dashboard__wrapper}>
                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN SECTION */}
                <main className={DashboardStyles.dashboard__content}>
                    <div className={DashboardStyles.dashboard__childrenWrapper}>
                        {children}
                    </div>
                </main>
            </div>

        </div>

    )
}

export default HomepageLayout