import PostListItem from "./PostListItem.js";
import posts from "./posts.js";

const PostList = () => {
    let postList = `<ul class="list-group">`;
    for (let i = 0; i < posts.length; i++) {
        postList += PostListItem(posts[i]);
    }
    postList += `</ul>`;
    return (postList);
};

export default PostList;
