const PostListItem = (post) => {
    return (`
    <div class="list-group-item p-2 bg-black">
        <div class="row g-0">
            <div class="col-1">
                <img src="${post.avatarIcon}" class="img-fluid rounded-circle">
            </div>
            <div class="col">
                <div class="d-flex flex-column">
                    <!-- User name and handle -->
                    <div class="col-12 d-flex">
                        <div class="fw-bold small">${post.userName} &nbsp;</div>
                        <div><i class="fa-solid fa-circle-check"></i></div>
                        <div class="small text-muted">&nbsp;@${post.handle}</div>
                        <div class="small text-muted">&nbsp; &#183; ${post.time}</div>
                    </div>
                    <!-- User Message -->
                    <div class="col-12">
                    ${post.post}
                    </div>
                    <!-- Post Image -->
                    <div class="col-12 mt-2">
                        <img src="${post.postImage}" class="img-fluid wd-image-border-top">
                    </div>
                    <!-- Post Image Title and Description -->
                    <div class="col-12 wd-text-border-bottom p-3">
                        <div class="fw-bold">${post.postImageTitle}</div>
                        <div class="small text-muted">${post.postImageDescription}</div>
                    </div>
                    <!-- Post Actions -->
                    <div class="col-12 d-flex justify-content-around mt-2">
                        <div class="d-flex">
                            <i class="fa fa-light fa-comment text-muted"></i>
                            <span class="small text-muted ms-2">${post.comments}</span>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-retweet text-muted"></i>
                            <span class="small text-muted ms-2">${post.retweets}</span>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-heart text-muted"></i>
                            <span class="small text-muted ms-2">${post.likes}</span>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-arrow-up-from-bracket text-muted"></i>
                            <span class="small text-muted ms-2">${post.share}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`); }
export default PostListItem;