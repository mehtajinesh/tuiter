import NavigationSidebar from "./../NavigationSideBar/NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "./../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="d-none d-sm-block col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col flex-grow-1">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
