import DashboardStyles from "./_userDashboardLayout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SidebarNavItem from "../../components/ui/sidebarNavItem/sidebarNavItem";


/* NAVLIST ICONS 
 Most of the Icons were not on FontAwesome thats why I'm using the images else icons are always prefferable */
import usersIcon from "../../assets/images/user-friends.png";
import guarantorIcon from "../../assets/images/users.png";
import decisonModelIcon from "../../assets/images/handshake-regular.png";
import loansIcon from "../../assets/images/sack.png";
import savingsIcon from "../../assets/images/piggy-bank.png";
import loanRequestIcon from "../../assets/images/loanRequest.png";
import WhitelistIcon from "../../assets/images/user-check.png";
import KarmaIcon from "../../assets/images/user-times.png";
import oraganizationIcon from "../../assets/images/briefcase.png";
import loanProductsIcon from "../../assets/images/loanRequest.png";
import savingsProductsIcon from "../../assets/images/saving.png";
import feesChargesIcon from "../../assets/images/coins-solid.png";
import transactionsIcon from "../../assets/images/transactions.png";
import servicesIcon from "../../assets/images/services.png";
import serviceAccountIcon from "../../assets/images/servicesAccount.png";
import settlementsIcon from "../../assets/images/settlement.png";
import reportsIcon from "../../assets/images/reports.png";
import preferencesIcon from "../../assets/images/preferences.png";
import feesPricingIcon from "../../assets/images/feesPricing.png";
import auditLogsIcon from "../../assets/images/auditLogs.png";
import dashboardIcon from "../../assets/images/home.png";
import switchOrganizationIcon from "../../assets/images/briefcase.png";


type navListProps = {
    icon: JSX.Element,
    text: string,
    
}

const Sidebar = () => {
    const navList = {
        customer: [
            {
                icon: <img src={usersIcon} alt='usersIcon' />,
                text: "Users"
            },
            {
                icon: <img src={guarantorIcon} alt='guarantorIcon' />,
                text: "Guarantors"
            },
            {
                icon: <img src={loansIcon} alt='guarantorIcon' />,
                text: "Loans"
            },
            {
                icon: <img src={decisonModelIcon} alt='guarantorIcon' />,
                text: "Decision Models"
            },
            {
                icon: <img src={savingsIcon} alt='guarantorIcon' />,
                text: "Savings"
            },
            {
                icon: <img src={loanRequestIcon} alt='guarantorIcon' />,
                text: "Loan Requests"
            },
            {
                icon: <img src={WhitelistIcon} alt='guarantorIcon' />,
                text: "Whitelist"
            },
            {
                icon: <img src={KarmaIcon} alt='guarantorIcon' />,
                text: "Karma"
            },
        ],

        businesses: [
            {
                icon: <img src={oraganizationIcon} alt='guarantorIcon' />,
                text: "Organization"
            },
            {
                icon: <img src={loanProductsIcon} alt='guarantorIcon' />,
                text: "Loan Products"
            },
            {
                icon: <img src={savingsProductsIcon} alt='guarantorIcon' />,
                text: "Savings Products"
            },
            {
                icon: <img src={feesChargesIcon} alt='guarantorIcon' />,
                text: "Fees and Charges"
            },
            {
                icon: <img src={transactionsIcon} alt='guarantorIcon' />,
                text: "Transactions"
            },
            {
                icon: <img src={servicesIcon} alt='guarantorIcon' />,
                text: "Services"
            },
            {
                icon: <img src={serviceAccountIcon} alt='guarantorIcon' />,
                text: "Service Account"
            },
            {
                icon: <img src={settlementsIcon} alt='guarantorIcon' />,
                text: "Settlements"
            },
            {
                icon: <img src={reportsIcon} alt='guarantorIcon' />,
                text: "Reports"
            }
        ], 
        settings: [
            {
                icon: <img src={preferencesIcon} alt='guarantorIcon' />,
                text: "Preferences"
            },
            {
                icon: <img src={feesPricingIcon} alt='guarantorIcon' />,
                text: "Fees and Pricing"
            },
            {
                icon: <img src={auditLogsIcon} alt='guarantorIcon' />,
                text: "Audit Logs"
            }
        ]
    }
    return (
        <aside className={DashboardStyles.dashboard__sidebar}>
            <ul>
                <SidebarNavItem navlink="#switchOrganization">
                    <img src={switchOrganizationIcon} alt='dashboard icon' />
                    <div>
                        <span> Switch Organization </span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </SidebarNavItem>

                <SidebarNavItem navlink="/dashboard/users">
                    <img src={dashboardIcon} alt='dashboard icon' /> <span>Dashboard</span>
                </SidebarNavItem>
            </ul>

            {/* CUSTOMERS SECTION */}
            <section className={DashboardStyles["dashboard__sidebar--section"]}>
                <h4 className={DashboardStyles["dashboard__sidebar--sectionTitle"]}>CUSTOMERS</h4>
                <ul>
                    {
                        navList.customer.map((navItem: navListProps, index: number) => {
                            return <SidebarNavItem navlink="#dashboard" key={index}>
                                {navItem.icon} <span>{navItem.text}</span>
                            </SidebarNavItem>
                        })
                    }
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar