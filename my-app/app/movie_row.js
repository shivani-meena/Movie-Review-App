import Action_row from "./action_row";
function Movie_row({movie, handleLike, handleDislike, handleDelete, vote}) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-12 col2">
                <div className="row movie-div">
                    <div className="col-12 col-sm-12 col-lg-4 image-box">
                        <img className="movie-image" src={movie.image_url}/>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-8 details">
                        <h2 className="fonts movie-name">{movie.movie_name}</h2>
                        <div>
                            <span className="year">{movie.year} • {movie.time}</span>
                            <span>|</span>
                            <span className="genre">{movie.genre}</span>
                        </div>
                        <div className="fonts description">description</div>
                        <div className="fonts about">{movie.description}</div>
                        <Action_row
                            handleLike={handleLike}
                            handleDislike={handleDislike}
                            handleDelete={handleDelete}
                            vote={vote}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie_row;
