const WhoToFollowListItem = ({
    who = {
        avatarIcon: 'public/images/nasa.svg',
        userName: 'NASA',
        handle: 'NASA'
    }
                             }) => {
    return (
    <div className="list-group-item p-1">
    <div className="row g-0">
      <div className="col-2 pe-2">
        <img
          src={who.avatarIcon}
          className="img-thumbnail rounded-circle border-0 wd-background-transparent"
        />
      </div>
      <div className="col d-flex flex-column me-auto">
        <div className="d-flex">
          <div className="fw-bold small">{who.userName}&nbsp;</div>
          <div><i className="fa-solid fa-circle-check"></i></div>
        </div>
        <div className="small">@{who.handle}</div>
      </div>
      <div className="col-3 my-auto">
        <button className="btn btn-primary fw-bold rounded-pill">
          Follow
        </button>
      </div>
    </div>
  </div>
); }
export default WhoToFollowListItem;