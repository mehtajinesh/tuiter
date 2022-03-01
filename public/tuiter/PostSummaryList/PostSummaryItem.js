const PostSummaryItem = ({topic,userName,title,time,image}) => {
    return (`
    <div class="list-group-item">
        <div class="row g-0 p-2">
        <!-- Post Text Data-->
            <div class="col flex-column">
                <div class="text-secondary small">`+topic+`</div>
                <div class="d-flex">
                    <div class="fw-bold">`+userName+` &nbsp;</div>
                    <div><i class="fa-solid fa-circle-check"></i></div>
                    <div class="small text-secondary">&nbsp;-&nbsp;`+time+`</div>
                </div>
                <div class="fw-bold">`+title+`</div>
            </div>
        <!-- Post Icon Data-->
            <div class="col-2 my-auto d-flex justify-content-end">
                <img
                src="`+image+`"
                class="img-fluid rounded"
                />
            </div>
        </div>
    </div>
`); }
export default PostSummaryItem;