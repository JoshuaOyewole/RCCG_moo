import DashboardStyles from "./_userDashboardLayout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";
import { getUserDatas } from "../../util/auth";
import { InAppHeader } from "../../components/header/Header";



type HomepageProps = {
    children: React.ReactNode;
}


function HomepageLayout(props: HomepageProps) {
    const { children } = props;
    const { firstname, lastname, profilePicture } = getUserDatas();//User context

    return (
        <div className={DashboardStyles.dashboard__container}>
            {/* HEADER SECTION (TOP NAVBAR) */}
            <header className={DashboardStyles.dashboard__header}>
                <InAppHeader extraClass={'px-0'} />

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