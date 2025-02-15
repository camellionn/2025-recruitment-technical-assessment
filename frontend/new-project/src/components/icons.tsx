
import { Search, LayoutGrid, Map, Moon } from 'lucide-react';
import '../styles/IconsSection.css';

const IconsSection = () => {
    return (
        <div className="icons-container">
            <div className="icon-wrapper">
                <Search  />
            </div>

            <div className="icon-wrapper">
                <LayoutGrid  />
            </div>

            <div className="icon-wrapper">
                <Map  />
            </div>

            <div className="icon-wrapper">
                <Moon  />
            </div>
        </div>
    );
};

export default IconsSection;
