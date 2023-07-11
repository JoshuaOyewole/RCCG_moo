import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Homepage from "./pages/homepage/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/register/index";
import ResetPassword from "./pages/resetPassword/index";
import ResetPwdLink from "./pages/resetPassword/resetPwd";
import UserProfile from "./pages/users/index";
import Error from "./pages/404/index";

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-pwdLink" element={<ResetPwdLink />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>

  )
}

export default App
