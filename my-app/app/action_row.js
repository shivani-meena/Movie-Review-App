function Action_row({handleLike, handleDislike, handleDelete, vote}) {
    return (
        <div className=" row action-row">
            <div className="icon-div">
                <img src="Icon-Like.png"
                    className="action-icon"
                    onClick={handleLike}
                />
                <span className="rating">{vote}</span>
                <img src="Icon-Dislike.png"
                    className="action-icon"
                    onClick={handleDislike}
                />
            </div>
            <div className="del">
                <img className="delete action-icon"
                    src="Delete.png"
                    onClick={handleDelete}
                />
            </div>
        </div>
    )
}

export default Action_row;










// function handleLike(id) {
//     let updated_movies = movies.map(function (movie) {
//         if (movie.id === id) {
//             return { ...movie, vote: movie.vote + 1 }
//         }
//         return movie;
//     });

//     sortMovies(updated_movies);
// }

// function handleDislike(id) {
//     console.log("start of dislike function", movies);
//     let updated_movies = movies.map(function (movie) {
//         if (movie.id === id) {
//             return { ...movie, vote: movie.vote - 1 }
//         }
//         return movie;
//     });

//     console.log("end of dislike function", updated_movies);
//     sortMovies(updated_movies);
// }

