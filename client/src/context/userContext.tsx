import React from "react"
//import { userType } from "../util/types";

//const userInfo: userType = JSON.parse(localStorage.getItem('user')!)
const firstname: string | null = localStorage.getItem('firstname')
const lastname: string | null = localStorage.getItem('lastname')
const profilePicture: string | null = localStorage.getItem('profilePicture');
const user_id: string | null = localStorage.getItem('user_id')


const UserContext = React.createContext({
    firstname,
    lastname,
    user_id:user_id,
    profilePicture: profilePicture ? profilePicture : "https://cdn3.iconfinder.com/data/icons/network-communication-vol-3-1/48/111-512.png"
});

export default UserContext;