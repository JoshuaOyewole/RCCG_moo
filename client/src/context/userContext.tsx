import React from "react"
import { userType } from "../util/types";

 const userInfo:userType = JSON.parse(localStorage.getItem('user')!)
 
const UserContext = React.createContext({
   firstname: userInfo?.user.firstname,
   lastname: userInfo?.user.lastname,
   profilePixs: userInfo?.user.profilePicture ? userInfo?.user.profilePicture : "https://cdn3.iconfinder.com/data/icons/network-communication-vol-3-1/48/111-512.png"
});

export default UserContext;

