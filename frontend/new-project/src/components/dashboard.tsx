import FilterSection from "./filter";
import Navbar from "./navbar";
import SearchIcon from "./search";
import SortFilter from "./sort";
import GridView from "./gridview";
import logo from "../assets/freeRoomsLogo.png"

import "../styles/DashBoard.css";

const DashBoard = () => {
    return (
        <div className="dashboard-container">
            <Navbar 
            openDoorSrc={logo}
            closedDoorSrc="/assets/freeroomsDoorClosed.png"/>

            <div className="features">
                <FilterSection />
                <SearchIcon />
                <SortFilter />
            </div>

            <div className="grid-view">
                <GridView />
            </div>
        </div>
    )
}

export default DashBoard;