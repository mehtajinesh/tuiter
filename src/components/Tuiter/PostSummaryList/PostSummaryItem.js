const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "./icons/reactjs-logo.svg"
                             }
                         }
) => {
    return (
    <div className="list-group-item">
        <div className="row g-0 p-2">
            <div className="col flex-column">
                <div className="text-secondary small">{post.topic}</div>
                <div className="d-flex">
                    <div className="fw-bold">{post.userName}&nbsp;</div>
                    <div><i className="fa-solid fa-circle-check"></i></div>
                    <div className="small text-secondary">&nbsp;-&nbsp;{post.time}</div>
                </div>
                <div className="fw-bold">{post.title}</div>
            </div>
            <div className="col-2 my-auto d-flex justify-content-end">
                <img
                src={post.image}
                className="img-fluid rounded"
                />
            </div>
        </div>
    </div>
);
}
export default PostSummaryItem;