import Users from "../../components/ui/userComponent/mainSection"
import UserDashboardLayout from "../../layouts/homepage/index"

export default function index() {

  return (
    <div className="wrapper">
      <UserDashboardLayout>
        <Users /> 
      </UserDashboardLayout>
    </div>
  )
}