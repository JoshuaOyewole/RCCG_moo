import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Homepage from "./pages/homepage/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/register/index";
import ResetPassword from "./pages/resetPassword/index";
import ResetPwdLink from "./pages/resetPassword/resetPwd";
import Error from "./pages/404/index";
import ProtectedRoute from "./util/ProtectedRoute";


function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-pwdLink" element={<ResetPwdLink />} />
        <Route path="*" element={<Error />} /> *
      </Routes>
    </>

  )
}

export default App
