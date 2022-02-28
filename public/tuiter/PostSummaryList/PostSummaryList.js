import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    let postSummaryList = `<ul class="list-group">`;
    for (let i = 0; i < posts.length; i++) {
        postSummaryList += PostSummaryItem(posts[i]);
    }
    postSummaryList += `</ul>`;
    return (postSummaryList);
};

export default PostSummaryList;