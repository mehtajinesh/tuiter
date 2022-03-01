import NavigationSidebar from "./../NavigationSideBar/NavigationSidebar.js";
import PostList from "./../PostList/PostList.js";
import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="d-none d-sm-block col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('Home')}
            </div>
            <div class="col flex-grow-1">
                ${PostList()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
