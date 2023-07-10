import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Homepage from "./pages/homepage/index"
import Register from "./pages/register/index";
import ResetPassword from "./pages/resetPassword/index";
import ResetPwdLink from "./pages/resetPassword/resetPwd";
/* import Users from "./pages/dashboard/index"; */
import UserProfile from "./pages/users/index";
import Error from "./pages/404/index";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-pwdLink" element={<ResetPwdLink />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
