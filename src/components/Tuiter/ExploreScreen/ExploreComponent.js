import PostSummaryList from "./../PostSummaryList/PostSummaryList";
import React from "react";
const ExploreComponent = () => {
    return (
        <div>
            <div className="d-flex">
                <div className="input-group me-5">
                    <span
                        className="input-group-text bg-white wd-border-top-left-rounded-pill wd-border-bottom-left-rounded-pill">
                        <label className="fa-solid fa-magnifying-glass text-muted" htmlFor="searchTuiter">
                        </label>
                    </span>
                    <input type="text" id="searchTuiter"
                           className="shadow-none form-control wd-border-top-right-rounded-pill wd-border-bottom-right-rounded-pill wd-hide-border-start"
                           placeholder="Search Tuiter"/>
                </div>
                <div className="ms-auto my-auto">
                    <a href="#">
                        <i className="fa-solid fa-cog fa-xl"/>
                    </a>
                </div>
            </div>
            <ul className="nav mt-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="mt-2 mb-2">
                <div className="card text-white border-0">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                         className="card-img rounded-0" alt={`Explore Main Image`}/>
                    <div className="card-img-overlay">
                        <h3 className="ms-2 position-absolute bottom-0 start-0 card-title fw-bold">
                            SpaceX's Starship
                        </h3>
                    </div>
                </div>
            </div>
            <PostSummaryList />
        </div>
    );
}
export default ExploreComponent;
