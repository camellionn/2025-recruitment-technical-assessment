import { useState } from 'react';
import IconsSection from "./icons";
import "../styles/Navbar.css";

interface NavBarProps {
    openDoorSrc: string;  // Path to open door image
    closedDoorSrc: string; // Path to closed door image
}

const Navbar: React.FC<NavBarProps> = ({openDoorSrc, closedDoorSrc}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDoor = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="logo" onClick={toggleDoor} style={{ cursor: "pointer" }}>
                <img
                    src={isOpen ? openDoorSrc : closedDoorSrc}
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
