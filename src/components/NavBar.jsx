import logo from "../images/airbnb-logo.png"

export default function NavBar(){
    return(
        <nav>
            <img src={logo} alt="AirBnb Logo" className="nav--logo"/>
        </nav>
    )
}