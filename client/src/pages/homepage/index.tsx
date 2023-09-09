import maintenance from "../../assets/images/maintenance.svg"
import Homepage from "../../layouts/homepage/index"


export default function index() {

    return (
        <div className="wrapper">
            <Homepage>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>

                <h2>Site under Maintenance</h2>
                <p>We will be back Soon</p>

                <img src={maintenance} style={{width:"60rem"}}/>

                <p>We all at RCCG Mount of Olive Loves and Cherish you</p>
                </div>
                {/* <MainSection/> */}
            </Homepage>
        </div>
    )
}