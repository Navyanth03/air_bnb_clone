import logo from '../assets/airbnb.png';

export default function NavBar(){
    return(
        <div id='navbar-container'>
            <img src={logo} alt="air bnb logo" id='logo' />
        </div>
    )
}