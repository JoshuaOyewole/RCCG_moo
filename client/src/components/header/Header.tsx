import { Link } from "react-router-dom"
import logo from "../../assets/images/RCCG_logo.png"
import Style from "./_header.module.scss"
type Props = {
  extraClass?:string
}

export const Header = ({extraClass}: Props) => {
  return (
    <header className={`${Style.header} ${extraClass}`}>
      <Link to='/' className={Style.header_wrapper}>
        <img src={logo} alt="RCCG Logo" className={Style.header_image} />
        <p className={Style.header_para}>
          <span style={{ display: "block" }}>  MOO</span>
          {/* <span style={{ display: "block" }}>LP 12, Baruwa Inside, Lagos</span> */}
        </p>
      </Link>

    </header>
  )
}

export const InAppHeader = ({extraClass}: Props) => {
  return (
    <header className={`${Style.header} ${extraClass}`}>
      <Link to='/' className={Style.header_wrapper}>
        <img src={logo} alt="RCCG Logo" className={Style.header_image} />
        <p className={`${Style.header_para} ${Style.header_para2}`}>
          <span>  MOO</span>
          {/* <span style={{ display: "block" }}>LP 12, Baruwa Inside, Lagos</span> */}
        </p>
      </Link>

    </header>
  )
}