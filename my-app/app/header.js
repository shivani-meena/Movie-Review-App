"use client"
import { useState } from 'react';
import './header.css';

function Header({ setMovies, movies }) {
    const [value, setValue] = useState("");
    const [id, setId] = useState(4);

    function handleSearch() {
        setId(id + 1);

        let fetch_promise = fetch(`http://www.omdbapi.com/?t="+${value}+"&apikey=4369fff9`);
        fetch_promise.then((response) => {
            return response.json();
        }).then((data) => {

            let search_movie = { "id": id, "vote": 0, "year": data.Year, "movie_name": data.Title, "genre": data.Genre, "time": data.Runtime, "image_url": data.Poster, "description": data.Plot }
            setMovies([...movies, search_movie]);
        });
    };

    return (
        <>
            <div className='container'>
                <div className="row header-row">
                    <div className="logo-image">
                        <img className="header-img" src="header-image.png" />
                        <span>Movie Hub</span>
                    </div>
                    <div className='search'>
                        <input className='input-text' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className='button' onClick={handleSearch}>
                            <span>Add</span>
                        </button>
                    </div>
                    <div className="navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button">
                            <img src="menu.png" />
                        </button>
                        <div className="collapse navbar-collapse">
                            <div className="lists">
                                <li className='list-text'>List</li>
                                <li className=''>Add Movie</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center search1'>
                    <div className='mobile-search'>
                        <input className='input-text' />
                        <button className='button'>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='hr'></hr>
        </>
    )
}

export default Header;
