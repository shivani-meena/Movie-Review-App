import './header.css';

function Header(){
    return(
        <div class="container-fluid header">
            <img class="headerImg" src="header_image.png"/>
            <div class="movie_hub">Movie Hub</div>
            <div class="add">Add Movie</div>
            <div class="watch">Watch</div>
        </div>
    )
}

export default Header;