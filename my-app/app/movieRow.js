function MovieRow({movieData}){
    return(
        <>
            <div className="movieRow">
                <div className="movie">
                <div>
                    <img src={movieData.image_url}/>
                </div>
                <div>
                    <h3>{movieData.movieName}</h3>
                </div>

                </div>
            </div>
        </>
    )
}

export default MovieRow;