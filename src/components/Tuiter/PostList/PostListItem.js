const PostListItem = ({
                          post = {
                              "avatarIcon": "./../images/virgin.svg",
                              "userName": "Virgin Galactic",
                              "handle": "virgingalactic",
                              "time": "23h",
                              "post": "We are the world's first commercial spaceline, and our purpose is to connect people across the globe to the love, wonder and awe created by space travel.",
                              "postImage": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F02%2F15%2Fvirgin-galactic.jpg&q=60",
                              "postImageTitle": "Virgin Galactic Begins Selling Transformational Tickets to Space for $450,000",
                              "postImageDescription": "Virgin Galactic on Tuesday announced that sales for the spaceflight company's upcoming voyages will open on Wednesday.",
                              "comments": "4.2K",
                              "retweets": "1.2K",
                              "likes": "3.2K",
                              "share": "5.2K"
                          }
                      }) => {
    return (
        <div className="list-group-item p-2 bg-black">
            <div className="row g-0">
                <div className="col-1">
                    <img src={post.avatarIcon} className="img-fluid rounded-circle" alt="post icon"/>
                </div>
                <div className="col">
                    <div className="d-flex flex-column">
                        <div className="col-12 d-flex">
                            <div className="fw-bold small">{post.userName} &nbsp;</div>
                            <div><i className="fa-solid fa-circle-check"/></div>
                            <div className="small text-muted">&nbsp;@{post.handle}</div>
                            <div className="small text-muted">&nbsp; &#183; {post.time}</div>
                        </div>
                        <div className="col-12">
                            {post.post}
                        </div>
                        <div className="col-12 mt-2">
                            <img src={post.postImage} className="img-fluid wd-image-border-top" alt="post"/>
                        </div>
                        <div className="col-12 wd-text-border-bottom p-3">
                            <div className="fw-bold">{post.postImageTitle}</div>
                            <div className="small text-muted">{post.postImageDescription}</div>
                        </div>
                        <div className="col-12 d-flex justify-content-around mt-2">
                            <div className="d-flex">
                                <i className="fa fa-light fa-comment text-muted"/>
                                <span className="small text-muted ms-2">{post.comments}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-retweet text-muted"/>
                                <span className="small text-muted ms-2">{post.retweets}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-heart text-muted"/>
                                <span className="small text-muted ms-2">{post.likes}</span>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-arrow-up-from-bracket text-muted"/>
                                <span className="small text-muted ms-2">{post.share}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}
export default PostListItem;