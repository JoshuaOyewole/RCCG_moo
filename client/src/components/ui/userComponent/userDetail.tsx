import { useEffect, useState } from "react";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserStyle from "./_user.module.scss"
import Button from "../button/button/button";
import starImg from "../../../assets/images/star.png"
import starImg2 from "../../../assets/images/star2.png"
import { NavLink, useParams } from "react-router-dom";
import UserInfoSection from "./userInfoSection";


interface usersProps {
    id: number | string;
    accountBalance: string;
    accountNumber: string,
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;

    profile: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        avatar: string,
        bvn: string,
        gender: string
    },
    guarantor: {
        firstName: string,
        lastName: string,
        phoneNumber: string
    },
    socials: {
        facebook: string,
        instagram: string,
        twitter: string
    }
    education: {
        level: string,
        employmentStatus: string,
        sector: string,
        duration: string,
        officeEmail: string,
        monthlyIncome: string[],
        loanRepayment: string
    }
}


const UserDetails = () => {
    const userID = useParams().id;
   
    const initialValue = {
        id: 1,
        accountBalance: "₦200,000.00",
        accountNumber: "9912345678",
        createdAt: "May 15, 2020 10:00 AM",
        orgName: "Dixre",
        userName: "Adedeji",
        email: "adedeji@Dixre.com",
        phoneNumber: "08078903721",

        profile: {
            firstName: "Grace",
            lastName: "Effiom",
            phoneNumber: "07060780922",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
            bvn: "657515469",
            gender: "Female"
        },
        guarantor: {
            firstName: "Debby",
            lastName: "Ogana",
            phoneNumber: "07060780922"
        },
        socials: {
            facebook: "Grace Effiom",
            instagram: "@grace_effiom",
            twitter: "@grace_effiom"
        },
        education: {
            level: "B.Sc",
            employmentStatus: "Employed",
            sector: "FinTech",
            duration: "2 years",
            officeEmail: "grace@Dixre.com",
            monthlyIncome: ["20000000", "40000000"],
            loanRepayment: "40,000"
        }
    }
    const [user, setUser] = useState<usersProps>(initialValue)

    /* FETCH USER BASED ON HIS/HER ID */
    const fetchUsers = async () => {
        const response = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/Dixre/api/v1/users/${userID}`);
        setUser(response?.data);
    }

    useEffect(() => {
        const fetchUser = localStorage.getItem("users");

        // Check if the User Data was gotten and not null 
        if (fetchUser != null) {
            const getUser = JSON.parse(fetchUser).filter((user:usersProps)=>user.id == userID);
   
            setUser(getUser[0]);  
        }

        fetchUsers();
    }, [])
    


    return (
        <div className={UserStyle.userContainer}>
            <div className={UserStyle.navigateUser}>
                <NavLink
                    to={"/dashboard/users"}
                    className={UserStyle.navigateUser__text}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to Users
                </NavLink>
            </div>
            <div className={UserStyle.navigateUser__header}>
                <h1 className={UserStyle["navigateUser__header--title"]}>User Details</h1>
                <div className={UserStyle["userActionBtn__container"]}>
                    <Button
                        btnClassName="border_btn border_btn--error uppercase"
                        handleClick={() => alert('User blacklisted')}
                    >
                        Blacklist User
                    </Button>
                    <Button
                        btnClassName="border_btn border_btn--primary uppercase"
                        handleClick={() => alert('User activated')}
                    >
                        Activate User
                    </Button>

                </div>
            </div>

            <header className={UserStyle.userInfo__header}>
                <div className={UserStyle.userInfo__top}>
                    <div className={UserStyle.userInfo__profileImgWrapper}>
                        <div className={UserStyle.userInfo__profilePixs}>
                            {<img src={user?.profile?.avatar} alt="Profile pixs" />}
                        </div>
                        <div className={UserStyle.userInfo__userNameContainer}>
                            <div className={UserStyle.userInfo__name}>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</div>
                            <div className={UserStyle.userInfo__username}>{user?.userName}</div>
                        </div>
                    </div>
                    <div className={UserStyle.userInfo__otherDetailsWrapper}>
                        <div className={UserStyle.userInfo__userTierContainer}>
                            <h3 className={UserStyle.userInfo__userTier}>User’s Tier</h3>
                            <div className={UserStyle.userInfo__starsContainer}>
                                <img src={starImg} alt="userTier" className={UserStyle.userInfo__usertTierStar} />
                                <img src={starImg2} alt="userTier" className={UserStyle.userInfo__usertTierStar} />
                                <img src={starImg2} alt="userTier" className={UserStyle.userInfo__usertTierStar} />
                            </div>
                        </div>
                        <div className={UserStyle.userInfoContainer}>
                            <h3 className={UserStyle.userInfo__name}>
                                ₦{user?.accountBalance}
                            </h3>
                            <div className={UserStyle.userInfo__accountNumber}>
                                {user?.accountNumber}/Providus Bank
                            </div>
                        </div>
                    </div>
                </div>
                <div className={UserStyle.userInfoTabs}>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        General Details
                    </button>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        Documents
                    </button>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        Bank Details
                    </button>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        Loans
                    </button>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        Savings
                    </button>
                    <button type="button" className={UserStyle.userInfoTabs__tab}>
                        App and System
                    </button>
                </div>
            </header>

            <div className={UserStyle.userDetailsContainer}>
                <UserInfoSection
                    tableHeader={["full Name", "Phone Number", "Email Address", "Bvn", "Gender", "Marital status", "Children", "Type of residence"]}
                    tdatas={[user?.profile.firstName, user?.phoneNumber, user?.email, user?.profile.bvn, user?.profile.gender, "Single", "None", "Parent’s Apartment"]}
                    tableTitle="Personal Information"
                />
                <UserInfoSection
                    tableHeader={["level of education", "employment status", "sector of employment", "Duration of employment", "office email", "Monthly income", "loan repayment"]}
                    tdatas={[user?.education.level, user?.education.employmentStatus, user?.education.sector, user?.education.duration, user?.education.officeEmail, user?.education.monthlyIncome[0], user?.education.loanRepayment]}
                    tableTitle="Education and Employment"
                />
                <UserInfoSection
                    tableHeader={["Twitter", "Facebook", "Instagram"]}
                    tdatas={[user?.socials.twitter, user?.socials.facebook, user?.socials.instagram]}
                    tableTitle="Socials"
                />
                <UserInfoSection
                    tableHeader={["full Name", "Phone Number", "Email Address", "Relationship"]}
                    tdatas={[user?.guarantor.firstName, user?.guarantor.phoneNumber, user?.guarantor.firstName + "@gmail.com", "Sister"]}
                    tableTitle="Guarantor"
                />
            </div>

        </div>

    )

}

export default UserDetails