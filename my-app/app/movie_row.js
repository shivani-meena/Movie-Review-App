import Action from "./action_row";
function Movie_row() {
    return (
        <>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-12 col">
                    <div className="row movie-div">
                        <div className="col-lg-4 col-md-12 col-12 col image-box">col-4</div>
                        <div className="col-lg-8 col-md-12 col-12 col details">col-8
                            {/* <div className=" row action-row"></div> */}
                            <Action />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie_row;
