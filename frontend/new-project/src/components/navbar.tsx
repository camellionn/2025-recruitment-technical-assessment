
import IconsSection from "./icons";
import "../styles/Navbar.css";
import logo from "../assets/freeRoomsLogo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img
                    src={logo}
                    className="logo-image"
                />
            </div>
            <div className='title'>
                <h1>Freerooms</h1>
            </div>
            <IconsSection />
        </nav>
    );
};

export default Navbar;
