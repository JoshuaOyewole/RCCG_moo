import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userType } from "./types";


type ProtectedRouteType = {
    children: React.ReactNode
}

const ProtectedRoute = (props: ProtectedRouteType) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const checkUserToken = () => {
        const userInfo: userType = JSON.parse(localStorage.getItem('user')!)
        const { token } = userInfo;
        if (!token || token === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}
export default ProtectedRoute;
