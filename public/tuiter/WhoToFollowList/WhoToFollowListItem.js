const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item p-1">
    <div class="row g-0">
      <div class="col-2 pe-2">
        <img
          src="`+who.avatarIcon+`"
          class="img-thumbnail rounded-circle border-0 wd-background-transparent"
        />
      </div>
      <div class="col d-flex flex-column me-auto">
        <div class="d-flex">
          <div class="fw-bold small">`+who.userName+`&nbsp;</div>
          <div><i class="fa-solid fa-circle-check"></i></div>
        </div>
        <div class="small">@`+who.handle+`</div>
      </div>
      <div class="col-3 my-auto">
        <button class="btn btn-primary fw-bold rounded-pill">
          Follow
        </button>
      </div>
    </div>
  </div>
`); }
export default WhoToFollowListItem;