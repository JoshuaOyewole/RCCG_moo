import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";


type ProtectedRouteType = {
    children: React.ReactNode
}

const ProtectedRoute = (props: ProtectedRouteType) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('token');
        if (!userToken || userToken === 'undefined') {
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
