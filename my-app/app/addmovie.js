import Form from "./form";

function Add_movie() {
    return (
        <>
            <div className="row form-row">
                <div className="add-movie">
                    <div className="new-movie">Add A New Movie</div>
                    <div className="paragraph">To add a movie you have to fill a form. The added movie will<br></br>appear in the list above</div>
                    <button className="add-button">
                        <span>Add New Movie</span>
                        <img className="arrow-image" src="arrow Grp.png" />
                    </button>
                </div>
            </div>
            {/* <Form /> */}
        </>
    )
}

export default Add_movie;