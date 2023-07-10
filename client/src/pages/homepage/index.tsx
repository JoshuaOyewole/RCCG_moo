import MainSection from "../../components/ui/userComponent/mainSection"
import Homepage from "../../layouts/homepage/index"

export default function index() {

    return (
        <div className="wrapper">
            <Homepage>
                <MainSection />
            </Homepage>
        </div>
    )
}