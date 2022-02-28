import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    let whoToFollowList = `<ul class="list-group">`;
    for (let i = 0; i < who.length; i++) {
        whoToFollowList += WhoToFollowListItem(who[i]);
    }
    whoToFollowList += `</ul>`;
    return (whoToFollowList);
};

export default WhoToFollowList;
