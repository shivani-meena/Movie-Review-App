import './header.css';

function Header() {
    return (
        <>
            <div className='container'>
                <div className="row header-row">
                    <div className="image">
                        <img className="header-img" src="header-image.png" />
                        <span>Movie Hub</span>
                    </div>
                    <div className='search d-none d-sm-block'>
                        <input className='input-text' />
                        <button className='button'>
                            <img src="Search.png" />
                        </button>
                    </div>
                    <div class="navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse">
                            <div class="lists">
                                <li className='list-text'>List</li>
                                <li className=''>Add Movie</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center search1'>
                    <input className='input-text' />
                    <button className='button'>
                        <img src="Search.png" />
                    </button>
                </div>
            </div>
            <hr className='hr'></hr>
        </>
    )
}


export default Header;
