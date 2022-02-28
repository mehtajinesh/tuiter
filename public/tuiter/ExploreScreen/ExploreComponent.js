import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <!-- Search Row-->
            <div class="d-flex">
                <!-- Search Box-->
                <div class="input-group me-5">
                    <span class="input-group-text bg-white wd-border-top-left-rounded-pill wd-border-bottom-left-rounded-pill">
                        <label class="fa-solid fa-magnifying-glass text-muted" for="searchTuiter">
                        </label>
                    </span>
                    <input type="text" id="searchTuiter" class="shadow-none form-control wd-border-top-right-rounded-pill wd-border-bottom-right-rounded-pill wd-hide-border-start"
                            placeholder="Search Tuiter"/>
                </div>
                <!-- Explore Settings Icon-->
                <div class="ms-auto my-auto">
                    <a href="explore-settings.html">
                        <i class="fa-solid fa-cog fa-xl"></i>
                    </a>
                </div>
            </div>
            <ul class="nav mt-2 nav-tabs">
                <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <!-- image with overlaid text -->
            <div class="mt-2 mb-2">
                <div class="card text-white border-0">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                            class="card-img rounded-0"/>
                    <div class="card-img-overlay">
                        <h3 class="ms-2 position-absolute bottom-0 start-0 card-title text-light fw-bold">
                            SpaceX's Starship
                        </h3>
                    </div>
                </div>
            </div>
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
