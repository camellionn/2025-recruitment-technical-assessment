import { useState } from 'react';
import IconsSection from "./icons";
import "../styles/Navbar.css";

interface NavBarProps {
    openDoorSrc: string;  // Path to open door image
    closedDoorSrc: string; // Path to closed door image
}

const Navbar: React.FC<NavBarProps> = ({openDoorSrc, closedDoorSrc}) => {
    //Task 1: State Management for the Door logo
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
                    alt = "freerooms-logo"
                />
            </div>
            <div className='title'>
                <h1>Freerooms</h1>
            </div>
            <div className='icon-section'>
                <IconsSection />
            </div>
        </nav>
    );
};

export default Navbar;
