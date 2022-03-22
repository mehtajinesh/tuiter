import NavigationSidebar from "./../NavigationSidebar";
import PostList from "./../PostList/PostList";
import PostSummaryList from "./../PostSummaryList/PostSummaryList";
import React from "react";
import "./home.css"
const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="d-none d-sm-block col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col flex-grow-1">
                <PostList/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;
