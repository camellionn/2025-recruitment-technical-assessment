import FilterSection from "./filter";
import Navbar from "./navbar";
import SearchIcon from "./search";
import SortFilter from "./Sort";
import GridView from "./gridview";

import "../styles/DashBoard.css";

const DashBoard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
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